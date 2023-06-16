from django.urls import path

from quiz import views

urlpatterns = [
    path("", views.get_questions_and_answers, name="get_questions_and_answers"),
]