# Generated by Django 3.0.4 on 2020-03-17 12:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0003_auto_20200317_1503'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='travel_date',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]