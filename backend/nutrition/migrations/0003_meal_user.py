# Generated by Django 5.1.3 on 2024-11-22 23:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nutrition', '0002_alter_meal_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='meal',
            name='user',
            field=models.CharField(default='', max_length=50),
        ),
    ]
