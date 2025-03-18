from rest_framework import serializers
from ..services.movies.models import Category, Movie, Screen, Seat, Showtime
from ..services.bookings.models import Booking, Payment, Review

# Movies App Serializers
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class MovieSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    
    class Meta:
        model = Movie
        fields = '__all__'

class ScreenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Screen
        fields = '__all__'

class SeatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seat
        fields = '__all__'

class ShowtimeSerializer(serializers.ModelSerializer):
    movie = MovieSerializer(read_only=True)
    screen = ScreenSerializer(read_only=True)
    
    class Meta:
        model = Showtime
        fields = '__all__'

# Bookings App Serializers
class BookingSerializer(serializers.ModelSerializer):
    showtime = ShowtimeSerializer(read_only=True)
    seat = SeatSerializer(read_only=True)
    
    class Meta:
        model = Booking
        fields = '__all__'

class PaymentSerializer(serializers.ModelSerializer):
    booking = BookingSerializer(read_only=True)
    
    class Meta:
        model = Payment
        fields = '__all__'

class ReviewSerializer(serializers.ModelSerializer):
    movie = MovieSerializer(read_only=True)
    
    class Meta:
        model = Review
        fields = '__all__'
