from django.urls import path
from template import views
from .views import search_cases

urlpatterns = [
    path("<str:id>/", views.result_view, name="template_id"),
]
