from django.urls import path, include
from .views import (
    MovieListView, CinemaListView, ShowTimeListView,
    EventListView, BookingListView,MovieDetailView, get_seats, book_seat, user_info,contact_view,BlogsListView
)

urlpatterns = [
    # 🔐 Authentication routes using Store (NO JWT)
    path('accounts/', include('allauth.urls')),  # Django Allauth authentication
    path('auth/', include('dj_rest_auth.urls')),  # REST authentication (login/logout)
    path('auth/registration/', include('dj_rest_auth.registration.urls')),  # User registration

    path('movies/', MovieListView.as_view(), name='movie-list'),
    path('cinemas/', CinemaListView.as_view(), name='cinema-list'),
    path('showtimes/', ShowTimeListView.as_view(), name='showtime-list'),
    path('events/', EventListView.as_view(), name='event-list'),
    path('bookings/', BookingListView.as_view(), name='booking-list'),
    path('blogs/', BlogsListView.as_view(), name='blog-list'),
    path('movies/<int:movie_id>/', MovieDetailView.as_view(), name='movie-detail'),

    path("seats/<int:screen_id>/", get_seats, name="get_seats"),
    path("book-seat/", book_seat, name="book_seat"),
    path("user-info/", user_info, name="user-info"),
    path('contact/', contact_view, name='contact'),



]
