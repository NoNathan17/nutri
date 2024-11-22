from rest_framework.decorators import api_view, permission_classes 
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny 
from .models import Meal
from .serializers import MealSerializer
from datetime import datetime

# Create your views here.
@api_view(['POST', 'GET'])
@permission_classes([AllowAny])
def nutrition_view(request):
    if request.method == 'POST':
        data = {
            'food': request.data.get('food'),
            'calories': request.data.get('calories'),
            'cost': request.data.get('cost'),
            'date': request.data.get('date')
        }

        serializer = MealSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Meal data saved successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'GET':
        meals = Meal.objects.filter(name=request.GET.get('food')).first()
        if meals:
            serializer = MealSerializer(meals)
            return Response(serializer.data)
        return Response({"message": "No meals found"}, status=404)
