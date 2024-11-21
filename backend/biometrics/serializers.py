from rest_framework import serializers
from .models import Biometrics

class BiometricsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Biometrics
        fields = ["name", "height", "weight", "age", "sex", "bmi", "maintenance_calories"]
        
