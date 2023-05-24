from django.urls import path

from . import views

urlpatterns = [
    path("", views.getAll, name="index"),
    path("<str:id>", views.getForum, name="getForum"),
    path("register", views.registerUser, name="register"),
    path("register/<str:id>/", views.registerUserId, name="resiterUserId"),
    path("register/<str:id>/check/", views.checkForUserId, name="checkForUserId"),
    path("login", views.login, name="login"),
    path("logout", views.logout, name="logout"),
    path("user/<str:id>", views.getUser, name="user")
]