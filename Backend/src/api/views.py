from rest_framework import generics,status
from ..services.movies.models import (
    Movie, Cinema, ShowTime, Event, Booking, Seat, Screen, Blog
)
from .serializers import (
    MovieSerializer, CinemaSerializer,
    ShowTimeSerializer, EventSerializer, BookingSerializer, BlogSerializer
)
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import stripe
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import render, redirect
from ..services.movies.forms import ContactMessageForm


# List all Movies
class MovieListView(generics.ListAPIView):
    serializer_class = MovieSerializer

    def get_queryset(self):
        queryset = Movie.objects.all()
        language = self.request.GET.get("language")
        format = self.request.GET.get("format")
        genre = self.request.GET.get("genre")

        if language:
            queryset = queryset.filter(languages__icontains=language)
        if format:
            queryset = queryset.filter(formats__icontains=format)
        if genre:
            queryset = queryset.filter(genres__icontains=genre)

        return queryset
    

class MovieDetailView(APIView):
    def get(self, request, movie_id):
        # Fetch the movie or return 404
        movie = get_object_or_404(Movie.objects.prefetch_related("cast", "crew", "images"), id=movie_id)

        # Get showtimes for the movie
        showtimes = ShowTime.objects.select_related("screen", "movie").filter(movie=movie)

        # Get cinemas that have screens showing this movie
        cinemas = Cinema.objects.filter(screens__showtimes__movie=movie).distinct()

        data = {
            "movie": MovieSerializer(movie).data,
            "showtimes": ShowTimeSerializer(showtimes, many=True).data,
            "cinemas": CinemaSerializer(cinemas, many=True).data
        }

        return Response(data, status=status.HTTP_200_OK)

# List all Cinemas
class CinemaListView(generics.ListAPIView):
    queryset = Cinema.objects.all()
    serializer_class = CinemaSerializer

# List all ShowTimes
class ShowTimeListView(generics.ListAPIView):
    queryset = ShowTime.objects.all()
    serializer_class = ShowTimeSerializer

# List all Events
class EventListView(generics.ListAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

# List all Bookings
class BookingListView(generics.ListAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer


class BlogsListView(generics.ListAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer


def get_seats(request, screen_id):
    try:
        print(screen_id)
        screen = Screen.objects.get(id=screen_id)
        seats = Seat.objects.filter(screen_id=screen)
        seat_data = [{"id": seat.id, "seat_number": seat.seat_number, "booked": seat.booked} for seat in seats]
        return JsonResponse({"seats": seat_data}, safe=False)
    except Screen.DoesNotExist:
        return JsonResponse({"error": "Screen not found"}, status=404)

@csrf_exempt
def book_seat(request):
    if request.method == "POST":
        data = json.loads(request.body)
        seat_ids = data.get("seat_ids", [])  # Accept multiple seat IDs
        customer_name = data.get("customer_name")
        customer_email = data.get("customer_email")
        showtime_id = data.get("showtime_id")
        token = data.get("stripe_token")

        try:
            showtime = ShowTime.objects.get(id=showtime_id)
            seats = Seat.objects.filter(id__in=seat_ids, booked=False)

            if not seats.exists():
                return JsonResponse({"error": "Selected seats are already booked or invalid"}, status=400)

            # Calculate total price
            total_price = showtime.price * seats.count()

            # Process Stripe payment
            charge = stripe.Charge.create(
                amount=int(total_price * 100),  # Stripe requires amount in cents
                currency="usd",
                description=f"Booking for {len(seats)} seats",
                source=token
            )

            # Create a Booking
            booking = Booking.objects.create(
                showtime=showtime,
                customer_name=customer_name,
                customer_email=customer_email,
                total_price=total_price,
                status="confirmed"
            )
            booking.seats.set(seats)

            # Mark seats as booked
            seats.update(booked=True)

            return JsonResponse({"message": "Seats booked successfully", "booking_id": booking.id, "charge_id": charge.id})
        
        except ShowTime.DoesNotExist:
            return JsonResponse({"error": "Showtime not found"}, status=404)
        except stripe.error.StripeError as e:
            return JsonResponse({"error": str(e)}, status=400)

    if request.method == "POST":
        data = json.loads(request.body)
        seat_id = data.get("seat_id")
        token = data.get("stripe_token")

        try:
            seat = Seat.objects.get(id=seat_id)
            if seat.booked:
                return JsonResponse({"error": "Seat is already booked"}, status=400)

            # Process Stripe payment (e.g., charge $10 per seat)
            charge = stripe.Charge.create(
                amount=1000,  # Amount in cents ($10)
                currency="usd",
                description=f"Booking for seat {seat.seat_number}",
                source=token
            )

            # If payment succeeds, mark the seat as booked
            seat.booked = True
            seat.save()

            return JsonResponse({"message": "Seat booked successfully", "charge_id": charge.id})
        except Seat.DoesNotExist:
            return JsonResponse({"error": "Seat not found"}, status=404)
        except stripe.error.StripeError as e:
            return JsonResponse({"error": str(e)}, status=400)
        


@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def user_info(request):
    user = request.user
    return JsonResponse({"name": user.get_full_name(), "email": user.email})


@csrf_exempt  # Temporarily disable CSRF protection for this view (be cautious about this in production)
def contact_view(request):
    if request.method == 'POST':
        try:
            # Get the JSON data from the request body
            data = json.loads(request.body)
            
            # Create the form with the received data
            form = ContactMessageForm(data)
            if form.is_valid():
                form.save()
                return JsonResponse({'message': 'Success'}, status=200)
            else:
                return JsonResponse({'message': 'Invalid form data'}, status=400)
        except Exception as e:
            return JsonResponse({'message': f'Error: {str(e)}'}, status=500)

    return JsonResponse({'message': 'Invalid request method'}, status=405)
