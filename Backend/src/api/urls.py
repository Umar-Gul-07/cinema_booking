from django.urls import path, include
from .views import (
    MovieListView, CinemaListView, ShowTimeListView,
    EventListView, BookingListView
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

]
