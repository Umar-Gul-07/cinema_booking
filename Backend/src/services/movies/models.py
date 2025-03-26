from django.db import models

# MOVIE MODELS
class Movie(models.Model):
    title = models.CharField(max_length=255)
    synopsis = models.TextField()
    duration = models.DurationField()  # Example: 2 hours 30 minutes
    release_date = models.DateField()
    languages = models.CharField(max_length=255)  # Example: "English, Hindi, Spanish"
    formats = models.CharField(max_length=100)  # Example: "2D, 3D, IMAX"
    background_image = models.ImageField(upload_to="movies/backgrounds/")
    trailer_url = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.title

class MovieImage(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE, related_name="images")
    image = models.ImageField(upload_to="movies/gallery/")

    def __str__(self):
        return f"Image for {self.movie.title}"

class Cast(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE, related_name="cast")
    name = models.CharField(max_length=255)
    role = models.CharField(max_length=255)
    profile_image = models.ImageField(upload_to="movies/cast/")

    def __str__(self):
        return f"{self.name} as {self.role}"

class Crew(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE, related_name="crew")
    name = models.CharField(max_length=255)
    position = models.CharField(max_length=255)  # Example: Director, Producer
    profile_image = models.ImageField(upload_to="movies/crew/")

    def __str__(self):
        return f"{self.name} - {self.position}"

# CINEMA & SCREEN MODELS
class Cinema(models.Model):
    name = models.CharField(max_length=255)
    location = models.TextField()
    total_screens = models.IntegerField()

    def __str__(self):
        return self.name

class Screen(models.Model):
    cinema = models.ForeignKey(Cinema, on_delete=models.CASCADE, related_name="screens")
    screen_number = models.IntegerField()
    capacity = models.IntegerField()

    def __str__(self):
        return f"Screen {self.screen_number} - {self.cinema.name}"

class Seat(models.Model):
    screen = models.ForeignKey(Screen, on_delete=models.CASCADE, related_name="seats")
    seat_number = models.CharField(max_length=10)  # Example: A1, B5
    is_vip = models.BooleanField(default=False)

    def __str__(self):
        return f"Seat {self.seat_number} - {self.screen}"

# SHOWTIMES (MOVIE SCREENING)
class ShowTime(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE, related_name="showtimes")
    screen = models.ForeignKey(Screen, on_delete=models.CASCADE, related_name="showtimes")
    date = models.DateField()
    time = models.TimeField()
    price = models.DecimalField(max_digits=6, decimal_places=2)

    def __str__(self):
        return f"{self.movie.title} at {self.screen.cinema.name}, Screen {self.screen.screen_number} on {self.date} at {self.time}"

# EVENTS (SPECIAL MOVIE EVENTS)
class Event(models.Model):
    name = models.CharField(max_length=255)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE, related_name="events")
    cinema = models.ForeignKey(Cinema, on_delete=models.CASCADE, related_name="events")
    date = models.DateField()
    time = models.TimeField()
    description = models.TextField()
    ticket_price = models.DecimalField(max_digits=6, decimal_places=2)

    def __str__(self):
        return f"{self.name} - {self.movie.title} at {self.cinema.name} on {self.date}"

# BOOKING SYSTEM
class Booking(models.Model):
    showtime = models.ForeignKey(ShowTime, on_delete=models.CASCADE, related_name="bookings", null=True, blank=True)
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name="bookings", null=True, blank=True)
    seats = models.ManyToManyField(Seat)
    customer_name = models.CharField(max_length=255)
    customer_email = models.EmailField()
    total_price = models.DecimalField(max_digits=8, decimal_places=2)
    booking_date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, choices=[('confirmed', 'Confirmed'), ('pending', 'Pending'), ('canceled', 'Canceled')], default='pending')

    def __str__(self):
        return f"Booking for {self.customer_name} - {self.status}"
