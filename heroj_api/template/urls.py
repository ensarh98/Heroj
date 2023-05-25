from django.urls import path

from template import views

urlpatterns = [
    path("<str:id>/", views.result_view, name="template_id"),
]
