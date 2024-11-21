from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from .models import Biometrics
from .serializers import BiometricsSerializer

@api_view(['POST'])
@permission_classes([AllowAny])
def save_biometrics(request):
    if request.method == 'POST':
        # Directly save the biometric data without user linkage
        data = {
            'name': request.data.get('name'),
            'age': request.data.get('age'),
            'weight': request.data.get('weight'),
            'height': request.data.get('height'),
            'sex': request.data.get('sex'),
            'bmi': request.data.get('bmi'),
            'maintenance_calories': request.data.get('maintenance_calories'),
        }

        # Serialize and save
        serializer = BiometricsSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Biometrics data saved successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
