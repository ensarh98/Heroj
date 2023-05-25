from django.db import models


# Create your models here.
class TemplateData(models.Model):
    id = models.CharField(max_length=30, primary_key=True)
    title = models.CharField(max_length=30)
    content = models.TextField()
