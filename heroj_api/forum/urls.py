from django.urls import path

from . import views

urlpatterns = [
    path("", views.getAll, name="index"),
    path("register", views.registerUser, name="register")
]