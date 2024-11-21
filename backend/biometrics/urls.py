from django.urls import path
from . import views

urlpatterns = [
    path('api/biometrics/', views.save_biometrics, name='save_biometrics'),
]
