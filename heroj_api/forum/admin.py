from django.contrib import admin
from .models import User
from .models import Forum
from .models import Topic
from .models import Post

# Register your models here.
admin.site.register(User)
admin.site.register(Forum)
admin.site.register(Topic)
admin.site.register(Post)