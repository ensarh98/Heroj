import json
from django.shortcuts import redirect, render
from django.http import HttpResponse
from django.core import serializers
from .models import Forum, User
from rest_framework.decorators import api_view
from django.contrib.auth.hashers import make_password

def getAll(request):
    return HttpResponse("Hello, world. You're at the polls index.")

@api_view(['GET'])
def getAll(request):
    qs = Forum.objects.all()
    qs_json = serializers.serialize('json', qs)
    return HttpResponse(qs_json, content_type='application/json')

@api_view(['POST'])
def registerUser(request):
    body = json.loads(request.body)
    user = User(username=body['username'], email=body['email'], password=make_password(body['password']))
    user.save()
    return redirect("https://localhost:3000/forum/");