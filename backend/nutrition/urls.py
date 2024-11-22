from django.urls import path
from . import views

urlpatterns = [
    path('api/nutrition/', views.nutrition_view, name='nutrition_view'),
]
