# Generated by Django 5.1.3 on 2024-11-21 22:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('biometrics', '0003_biometrics_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='biometrics',
            name='user',
        ),
    ]
