from django.urls import path, include
from .views import CategoryListView, MovieListView

urlpatterns = [
    path('accounts/', include('allauth.urls')),  # Allauth authentication routes
    path('auth/', include('dj_rest_auth.urls')),  # REST authentication
    path('auth/registration/', include('dj_rest_auth.registration.urls')),  # Registration routes
    path('categories/', CategoryListView.as_view(), name='category-list'),
    path('movies/', MovieListView.as_view(), name='movie-list'),
]
