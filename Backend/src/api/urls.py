from django.urls import path
from .views import CategoryListView, MovieListView

urlpatterns = [
    path('categories/', CategoryListView.as_view(), name='category-list'),
    path('movies/', MovieListView.as_view(), name='movie-list'),
]
