from rest_framework import serializers
from ..services.movies.models import (
    Movie, MovieImage, Cast, Crew,
    Cinema, Screen, Seat, ShowTime,
    Event, Booking
)

# MOVIE SERIALIZERS
class MovieImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = MovieImage
        fields = ["id", "image"]

class CastSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cast
        fields = ["id", "name", "role","profile_image"]

class CrewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Crew
        fields = ["id", "name", "position","profile_image"]

class MovieSerializer(serializers.ModelSerializer):
    images = MovieImageSerializer(many=True, read_only=True)
    cast = CastSerializer(many=True, read_only=True)
    crew = CrewSerializer(many=True, read_only=True)

    class Meta:
        model = Movie
        fields = ["id", "title", "synopsis", "release_date", "duration",
                  "languages", "formats","type","background_image", "images", "cast", "crew"]

# CINEMA & SCREEN SERIALIZERS
class ScreenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Screen
        fields = ["id", "screen_number", "capacity"]

class CinemaSerializer(serializers.ModelSerializer):
    screens = ScreenSerializer(many=True, read_only=True)

    class Meta:
        model = Cinema
        fields = ["id", "name", "location", "total_screens", "screens"]

# SEAT SERIALIZER
class SeatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seat
        fields = ["id", "seat_number", "is_vip"]

# SHOWTIME SERIALIZER
class ShowTimeSerializer(serializers.ModelSerializer):
    movie = MovieSerializer(read_only=True)
    screen = ScreenSerializer(read_only=True)

    class Meta:
        model = ShowTime
        fields = ["id", "movie", "screen", "date", "time", "price"]

# EVENT SERIALIZER
class EventSerializer(serializers.ModelSerializer):
    movie = MovieSerializer(read_only=True)
    cinema = CinemaSerializer(read_only=True)

    class Meta:
        model = Event
        fields = ["id", "name", "movie","image", "cinema", "date", "time", "ticket_price"]

# BOOKING SERIALIZER
class BookingSerializer(serializers.ModelSerializer):
    showtime = ShowTimeSerializer(read_only=True)
    event = EventSerializer(read_only=True)
    seats = SeatSerializer(many=True, read_only=True)

    class Meta:
        model = Booking
        fields = ["id", "customer_name", "customer_email", "showtime",
                  "event", "seats", "total_price", "status", "booking_date"]
