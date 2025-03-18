from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

# Movies App
class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

class Movie(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    duration = models.PositiveIntegerField(help_text="Duration in minutes")
    release_date = models.DateField()
    genre = models.CharField(max_length=100)
    poster = models.ImageField(upload_to='posters/', null=True, blank=True)
    category = models.ForeignKey(Category, related_name='movies', on_delete=models.CASCADE)

    def __str__(self):
        return self.title

# Showtimes App
class Screen(models.Model):
    name = models.CharField(max_length=50)
    total_seats = models.PositiveIntegerField()

    def __str__(self):
        return self.name

class Seat(models.Model):
    screen = models.ForeignKey(Screen, related_name='seats', on_delete=models.CASCADE)
    seat_number = models.CharField(max_length=10)
    is_vip = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.screen.name} - {self.seat_number}"

class Showtime(models.Model):
    movie = models.ForeignKey(Movie, related_name='showtimes', on_delete=models.CASCADE)
    screen = models.ForeignKey(Screen, related_name='showtimes', on_delete=models.CASCADE)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()

    def __str__(self):
        return f"{self.movie.title} at {self.start_time}"  
