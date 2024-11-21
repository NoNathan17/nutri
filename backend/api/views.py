from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny

# Create your views here.
class CreaUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serialzier_class = User
    permission_classes = [AllowAny]
