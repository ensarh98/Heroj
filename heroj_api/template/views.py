from django.http import HttpResponse
from django.core import serializers
from .models import TemplateData
from rest_framework.decorators import api_view


# Create your views here.
@api_view(["GET"])
def result_view(request, id):
    result = TemplateData.objects.filter(id=id)
    json_data = serializers.serialize("json", list(result))
    return HttpResponse(json_data, content_type="application/json")
