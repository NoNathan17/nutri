from django.db import models

# Create your models here.
class Meal(models.Model):
    user = models.CharField(max_length=50, default="")
    food = models.CharField(max_length=50)
    calories = models.IntegerField()
    cost = models.FloatField()
    date = models.CharField(max_length=50)

    def __str__(self):
        return self.food
