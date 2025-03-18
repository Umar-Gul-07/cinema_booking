
from django.contrib import admin
from .models import Booking, Payment, Review

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
