# Generated by Django 4.2 on 2023-06-15 11:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('template', '0003_keywords_synonyms_assoc'),
    ]

    operations = [
        migrations.AlterField(
            model_name='assoc',
            name='view_count',
            field=models.IntegerField(default=-1),
        ),
    ]