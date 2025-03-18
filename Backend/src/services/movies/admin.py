
from django.contrib import admin
from .models import Category, Movie, Screen, Seat, Showtime

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
