# Generated by Django 4.2 on 2023-05-23 20:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forum', '0010_session_email'),
    ]

    operations = [
        migrations.AlterField(
            model_name='session',
            name='expire_date',
            field=models.DateField(blank=True, default=None, null=True),
        ),
    ]
