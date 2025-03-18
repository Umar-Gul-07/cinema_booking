from rest_framework import generics
from ..services.movies.models import Category, Movie
from .serializers import CategorySerializer, MovieSerializer

# List Categories (Events)
class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

# List Movies
class MovieListView(generics.ListAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
