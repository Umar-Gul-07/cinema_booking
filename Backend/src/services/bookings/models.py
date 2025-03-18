from django.db import models
from django.contrib.auth import get_user_model
from ..movies.models import Showtime,Seat,Movie

User = get_user_model()

class Booking(models.Model):
    user = models.ForeignKey(User, related_name='bookings', on_delete=models.CASCADE)
    showtime = models.ForeignKey(Showtime, related_name='bookings', on_delete=models.CASCADE)
    seat = models.ForeignKey(Seat, related_name='bookings', on_delete=models.CASCADE)
    booked_at = models.DateTimeField(auto_now_add=True)
    is_paid = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.user.username} - {self.showtime.movie.title} - {self.seat.seat_number}"

class Payment(models.Model):
    booking = models.OneToOneField(Booking, related_name='payment', on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=8, decimal_places=2)
    transaction_id = models.CharField(max_length=255, unique=True)
    status = models.CharField(max_length=50, choices=[('pending', 'Pending'), ('completed', 'Completed'), ('failed', 'Failed')])
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.booking.user.username} - {self.amount} - {self.status}"

# Reviews App
class Review(models.Model):
    user = models.ForeignKey(User, related_name='reviews', on_delete=models.CASCADE)
    movie = models.ForeignKey(Movie, related_name='reviews', on_delete=models.CASCADE)
    rating = models.PositiveIntegerField()
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.movie.title} - {self.rating}"


