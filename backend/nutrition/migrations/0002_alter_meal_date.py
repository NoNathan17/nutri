# Generated by Django 5.1.3 on 2024-11-22 12:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nutrition', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='meal',
            name='date',
            field=models.CharField(max_length=50),
        ),
    ]
