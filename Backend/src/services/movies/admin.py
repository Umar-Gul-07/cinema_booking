
from django.contrib import admin
from .models import Category, Movie, Screen, Seat, Showtime, Booking, Payment, Review

# Movies Admin
@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')

@admin.register(Movie)
class MovieAdmin(admin.ModelAdmin):
    list_display = ('title', 'genre', 'release_date', 'category')
    list_filter = ('genre', 'release_date', 'category')
    search_fields = ('title', 'genre')

# Showtimes Admin
@admin.register(Screen)
class ScreenAdmin(admin.ModelAdmin):
    list_display = ('name', 'total_seats')

@admin.register(Seat)
class SeatAdmin(admin.ModelAdmin):
    list_display = ('screen', 'seat_number', 'is_vip')
    list_filter = ('screen', 'is_vip')

@admin.register(Showtime)
class ShowtimeAdmin(admin.ModelAdmin):
    list_display = ('movie', 'screen', 'start_time', 'end_time')
    list_filter = ('movie', 'screen', 'start_time')

# Bookings Admin
@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ('user', 'showtime', 'seat', 'booked_at', 'is_paid')
    list_filter = ('is_paid', 'booked_at')

@admin.register(Payment)
class PaymentAdmin(admin.ModelAdmin):
    list_display = ('booking', 'amount', 'transaction_id', 'status', 'created_at')
    list_filter = ('status', 'created_at')
    search_fields = ('transaction_id',)

# Reviews Admin
@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('user', 'movie', 'rating', 'created_at')
    list_filter = ('rating', 'created_at')
    search_fields = ('movie__title', 'user__username')
