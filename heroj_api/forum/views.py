from datetime import timedelta, date
import json
from django.shortcuts import redirect, render
from django.http import HttpResponse, JsonResponse
from django.core import serializers
from .models import Forum, RegisterToken, Session, User
from rest_framework.decorators import api_view
from django.contrib.auth.hashers import make_password, check_password
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from django.core.mail import send_mail
from django.utils.crypto import get_random_string
import re
from django.conf import settings
import environ

env = environ.Env()
environ.Env.read_env(settings.BASE_DIR / '.env')

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

    # Validate for empty fields (just in case)
    if username == '':
        return HttpResponse(content='username is required', status=200)
    if email == '':
        return HttpResponse(content='email is required', status=200)
    if password == '':
        return HttpResponse(content='password is required', status=200)

    # Validate username format
    if re.match("^[a-zA-Z0-9_]{5,15}$", username) == False:
        print("bad username: " + username)
        return HttpResponse(content='wrong username format', status=401)
    
    # Validate password format
    if re.match("^[a-zA-Z0-9_]{5,15}$", password) == False:
        print("bad password")
        return HttpResponse(content='wrong password format', status=401)

    # Check if email is not avalible
    if User.objects.filter(email=email).exists():
        return HttpResponse(content='email is not avaliable', status=200)

    # Check if username already exists
    if User.objects.filter(username=username).exists():
        return HttpResponse(content='username already exists', status=200)

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
        f"Please follow the link below to verify your email:\n{env('REACT_APP')}forum/register/{uid}",
        "heroj.grupa.4@gmail.com",
        [email],
        fail_silently=False,
    )

    return HttpResponse(content='successful registration', status=201)

@api_view(['GET'])
def checkForUserId(request, id):
    if RegisterToken.objects.filter(token=id).exists() == False:
        return HttpResponse('token not found', status=200)
    
    return HttpResponse('token found', status=200)

@api_view(['POST'])
def registerUserId(request, id):
    if RegisterToken.objects.filter(token=id).exists() == False:
        return HttpResponse('token not found', status=404)
    
    # Retrieve user from token and verify
    token = RegisterToken.objects.get(token=id)
    token.user.is_verified = True
    token.user.save()

    token.delete()

    return HttpResponse('verification successful', status=201)

def add_years(d, years):
    """Return a date that's `years` years after the date (or datetime)
    object `d`. Return the same calendar date (month and day) in the
    destination year, if it exists, otherwise use the following day
    (thus changing February 29 to March 1).
    """
    try:
        return d.replace(year = d.year + years)
    except ValueError:
        return d + (date(d.year + years, 1, 1) - date(d.year, 1, 1))

@api_view(['POST'])
def login(request):
    body = json.loads(request.body)
    email = body['email']
    password = body['password']
    remember = body['remember']

    if User.objects.filter(email=email).exists() == False:
        return HttpResponse('email not found', status=401)
    
    user = User.objects.get(email=email)

    if check_password(password, user.password) == False:
        return HttpResponse('wrong password', status=401)
    
    if remember:
        today = date.today()
        session = Session(user=user, expire_date=add_years(today, 2))
        session.save()
        return JsonResponse({"session_token": session.id, "expires": session.expire_date}, status=201)
    else:
        today = date.today()
        session = Session(user=user, expire_date=today+timedelta(days=2))
        session.save()
        return JsonResponse({"session_token": session.id, "expires": session.expire_date}, status=201)


@api_view(['POST'])
def logout(request):
    body = json.loads(request.body)
    id = body['id']

    if Session.objects.filter(id=id).exists() == False:
        return HttpResponse('session not found', satus=404)
    
    session = Session.objects.get(id=id)
    session.delete()

    return HttpResponse('logout successful', status=200)

@api_view(['GET'])
def getUser(request, id):
    if Session.objects.filter(id=id).exists() == False:
        return HttpResponse('session not found', satus=404)
    
    session = Session.objects.get(id=id)

    return JsonResponse({
        'username': session.user.username,
        'date_created': session.user.date_created
    })

@api_view(['GET'])
def getForum(request, id):
    if Forum.objects.filter(id=id).exists() == False:
        return HttpResponse('forum not found', satus=404)
    
    forum = Forum.objects.get(id=id)

    return JsonResponse({
        'title': forum.title
    })
