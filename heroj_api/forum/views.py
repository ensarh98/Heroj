from django.shortcuts import render
from django.http import HttpResponse
from django.core import serializers
from .models import Forum
from rest_framework.decorators import api_view

def getAll(request):
    return HttpResponse("Hello, world. You're at the polls index.")

@api_view(['GET'])
def getAll(request):
    qs = Forum.objects.all()
    qs_json = serializers.serialize('json', qs)
    return HttpResponse(qs_json, content_type='application/json')