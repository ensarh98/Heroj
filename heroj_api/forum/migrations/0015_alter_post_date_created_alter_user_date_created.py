# Generated by Django 4.2 on 2023-06-18 14:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forum', '0014_alter_topic_date_created'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='date_created',
            field=models.DateField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='date_created',
            field=models.DateField(auto_now_add=True),
        ),
    ]