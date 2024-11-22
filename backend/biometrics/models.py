from django.db import models

class Biometrics(models.Model):
    name = models.CharField(max_length=100, default="")
    age = models.IntegerField()
    weight = models.FloatField()
    height = models.CharField(max_length=50)
    sex = models.CharField(max_length=10)
    bmi = models.FloatField()
    maintenance_calories = models.FloatField()

    def __str__(self):
        return self.name
