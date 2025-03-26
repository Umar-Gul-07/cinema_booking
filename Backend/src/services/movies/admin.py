from django.contrib import admin
from .models import (
    Movie, MovieImage, Cast, Crew, 
    Cinema, Screen, Seat, ShowTime, 
    Event, Booking
)

# MOVIE ADMIN
class MovieImageInline(admin.TabularInline):
    model = MovieImage
    extra = 1  # Allows adding extra images easily

class CastInline(admin.TabularInline):
    model = Cast
    extra = 1  # Allows adding cast members easily

class CrewInline(admin.TabularInline):
    model = Crew
    extra = 1  # Allows adding crew members easily

@admin.register(Movie)
class MovieAdmin(admin.ModelAdmin):
    list_display = ("title", "release_date", "duration", "languages", "formats")
    search_fields = ("title", "languages", "formats")
    list_filter = ("release_date", "languages", "formats")
    inlines = [MovieImageInline, CastInline, CrewInline]  # Show related models inline

@admin.register(MovieImage)
class MovieImageAdmin(admin.ModelAdmin):
    list_display = ("movie", "image")

@admin.register(Cast)
class CastAdmin(admin.ModelAdmin):
    list_display = ("movie", "name", "role")

@admin.register(Crew)
class CrewAdmin(admin.ModelAdmin):
    list_display = ("movie", "name", "position")

# CINEMA ADMIN
class ScreenInline(admin.TabularInline):
    model = Screen
    extra = 1  # Allows adding screens inside the cinema admin

@admin.register(Cinema)
class CinemaAdmin(admin.ModelAdmin):
    list_display = ("name", "location", "total_screens")
    search_fields = ("name", "location")
    inlines = [ScreenInline]

@admin.register(Screen)
class ScreenAdmin(admin.ModelAdmin):
    list_display = ("cinema", "screen_number", "capacity")
    search_fields = ("cinema__name", "screen_number")

# SEATS ADMIN
@admin.register(Seat)
class SeatAdmin(admin.ModelAdmin):
    list_display = ("screen", "seat_number", "is_vip")
    search_fields = ("screen__cinema__name", "seat_number")
    list_filter = ("is_vip",)

# SHOWTIME ADMIN
@admin.register(ShowTime)
class ShowTimeAdmin(admin.ModelAdmin):
    list_display = ("movie", "screen", "date", "time", "price")
    search_fields = ("movie__title", "screen__cinema__name")
    list_filter = ("date", "screen__cinema__name")

# EVENTS ADMIN
@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ("name", "movie", "cinema", "date", "time", "ticket_price")
    search_fields = ("name", "movie__title", "cinema__name")
    list_filter = ("date", "cinema__name")

# BOOKING ADMIN
@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ("customer_name", "customer_email", "showtime", "event", "total_price", "status", "booking_date")
    search_fields = ("customer_name", "customer_email", "showtime__movie__title")
    list_filter = ("status", "booking_date")
    filter_horizontal = ("seats",)  # Allows better seat selection

