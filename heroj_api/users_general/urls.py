from django.urls import path
from users_general import views

urlpatterns = [
    path('register/', views.register, name='register'),
    path('login/', views.login, name='login'),
    path('checkUserInDatabase/', views.checkUserInDatabase, name='checkUserInDatabase'),
    path('checkEmailInDatabase/', views.checkEmailInDatabase, name='checkEmailInDatabase'),
    path('getUsername/', views.getUsername, name='getUsername'),
]