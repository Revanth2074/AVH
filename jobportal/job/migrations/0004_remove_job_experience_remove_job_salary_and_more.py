# Generated by Django 5.0.1 on 2024-04-26 16:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('job', '0003_job'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='job',
            name='experience',
        ),
        migrations.RemoveField(
            model_name='job',
            name='salary',
        ),
        migrations.RemoveField(
            model_name='job',
            name='skills',
        ),
    ]
