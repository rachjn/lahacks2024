# Generated by Django 5.0.4 on 2024-04-20 07:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('userapi', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='appuser',
            name='country',
        ),
    ]
