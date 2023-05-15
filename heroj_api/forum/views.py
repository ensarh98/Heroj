import json
from django.shortcuts import redirect, render
from django.http import HttpResponse
from django.core import serializers
from .models import Forum, RegisterToken, User
from rest_framework.decorators import api_view
from django.contrib.auth.hashers import make_password
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from django.core.mail import send_mail
from django.utils.crypto import get_random_string
import environ
import re

env = environ.Env()
environ.Env.read_env()

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

    username = body['username']
    email = body['email']
    password = body['password']

    # Validate username format
    if re.match("^[a-zA-Z0-9_]{5,15}$", username) == False:
        print("bad username: " + username)
        return HttpResponse(content='wrong username format', status=401)
    
    # Validate password format
    if re.match("^[a-zA-Z0-9_]{5,15}$", password) == False:
        print("bad password")
        return HttpResponse(content='wrong password format', status=401)

    # Check if username already exists
    if User.objects.filter(username=username).exists():
        return HttpResponse(content='username already exists', status=401)
    
    # Check if email is not avalible
    if User.objects.filter(email=email).exists():
        return HttpResponse(content='email is not avaliable', status=401)

    # Create new user in database
    user = User(username=username, email=email, password=make_password(password))
    user.save()
    
    # Validate email format
    try:
        validate_email(email)
    except ValidationError as e:
        print("bad email: " + e)
        return HttpResponse(content='wrong email format', status=401)
    
    # Generate token for verification url for user
    uid = ""
    while True:
        uid = get_random_string(length=32)
        if RegisterToken.objects.filter(token=uid).exists() == False:
            registerToken = RegisterToken(user=user, token=uid)
            registerToken.save()
            break

    # Send verify email response
    send_mail(
        "Heroj, Verify email",
        f"Please follow the link below to verify your email:\nhttp://localhost:3000/forum/register/{uid}",
        "heroj.grupa.4@gmail.com",
        [email],
        fail_silently=False,
    )

    return HttpResponse(content='successful registration', status=201)

@api_view(['POST'])
def registerUserId(request, id):
    if RegisterToken.objects.filter(token=id).exists == False:
        return HttpResponse('token not found', status=401)
    
    # Retrieve user from token and verify
    token = RegisterToken.objects.get(token=id)
    token.user.is_verified = True
    token.user.save()

    token.delete()

    return HttpResponse('verification successful', status=201)
