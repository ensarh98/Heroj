# Generated by Django 4.2 on 2023-05-15 13:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('forum', '0007_registertoken'),
    ]

    operations = [
        migrations.RenameField(
            model_name='registertoken',
            old_name='username',
            new_name='user',
        ),
    ]
