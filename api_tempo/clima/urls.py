from django.urls import path
from .views import city_weather, get_cities

urlpatterns = [
    path('tempo/city/<str:city>/', city_weather),
    path('tempo/cities/', get_cities, name='get_cities'),
]
