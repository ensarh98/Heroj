import uuid
from django.db import models
from django.utils import timezone

class User(models.Model):
    username = models.CharField(max_length=200, unique=True)
    email = models.CharField(max_length=200, unique=True)
    password = models.CharField(max_length=200)
    date_created = models.DateField(auto_now=True)
    date_suspension = models.DateTimeField(default=None, blank=True, null=True)
    banned = models.BooleanField(default=False)
    is_verified = models.BooleanField(default=False)
    def __str__(self):
        return self.username
    def is_suspended(self):
        return self.date_suspension and self.date_suspension > timezone.now()

class RegisterToken(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    token = models.CharField(max_length=32, unique=True)

class Forum(models.Model):
    id = models.CharField(primary_key=True, max_length=200)
    title = models.CharField(max_length=200)
    def __str__(self):
        return self.id

class Topic(models.Model):
    title = models.CharField(max_length=200)
    date_created = models.DateField(auto_now=True)
    date_modified = models.DateField(auto_now=True)
    view_count = models.IntegerField(default=0)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    forum = models.ForeignKey(Forum, on_delete=models.CASCADE)
    post_count = models.IntegerField(default=0)

class Post(models.Model):
    text = models.CharField(max_length=1000)
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date_created = models.DateField(auto_now=True)
    date_modified = models.DateField(auto_now=True)

class Session(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    expire_date = models.DateField(default=None, blank=True, null=True)
