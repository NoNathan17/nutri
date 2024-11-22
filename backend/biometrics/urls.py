from django.urls import path
from . import views

urlpatterns = [
    path('api/biometrics/', views.biometrics_view, name='biometrics_view'),
]
