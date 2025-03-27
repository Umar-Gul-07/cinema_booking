from rest_framework import generics,status
from ..services.movies.models import (
    Movie, Cinema, ShowTime, Event, Booking
)
from .serializers import (
    MovieSerializer, CinemaSerializer,
    ShowTimeSerializer, EventSerializer, BookingSerializer
)
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404



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
