from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import WeatherCity

@csrf_exempt
def city_weather(request, city):
    if request.method == 'POST':
        WeatherCity.objects.create(name=city)
        return JsonResponse({'message': f'City "{city}" saved'}, status=201)

    elif request.method == 'GET':
        return JsonResponse({'message': f'City received: {city}'})
   
    elif request.method == 'DELETE':
        deleted, _ = WeatherCity.objects.filter(name=city).delete()
        if deleted:
            return JsonResponse({'message': f'City "{city}" deleted successfully'})
        else:
            return JsonResponse({'error': f'City "{city}" not found'}, status=404)

def get_cities(request):
    if request.method == "GET":
        cities = list(WeatherCity.objects.values_list('name', flat=True))
        return JsonResponse({'cities': cities})
    return JsonResponse({'error': 'Method not allowed'}, status=405)
