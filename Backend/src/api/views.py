from rest_framework import generics
from ..services.movies.models import (
    Movie, Cinema, ShowTime, Event, Booking
)
from .serializers import (
    MovieSerializer, CinemaSerializer,
    ShowTimeSerializer, EventSerializer, BookingSerializer
)

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
