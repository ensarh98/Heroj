from rest_framework.decorators import api_view
from rest_framework.response import Response
from datetime import datetime
from django.contrib.auth.hashers import make_password, check_password
from django.http import HttpResponse, HttpResponseBadRequest
import re

def checkUsername(username):
    if not re.match(r'^[a-zA-Z0-9_]+$', username.lower()):
        return False
    elif len(username) < 3:
        return False
    else:
        return True

def checkEmail(email):
    if not re.match(r'^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$', email.lower()):
        return False
    else:
        return True

def checkPassword(password):
    if not re.match(r'^[a-zA-Z0-9]+$', password.lower()):
        return False
    elif not re.search(r'[A-Z]', password):
        return False
    elif len(password) < 5:
        return False
    else:
        return True

def checkDate(birth_date):
    try:
        year, month, day = map(int, birth_date.split("-"))
        max_day = (datetime(year, month + 1, 1) - datetime(year, month, 1)).days
    except ValueError:
        return False
    else:
        if month < 1 or month > 12 or day < 1 or day > max_day:
            return False
        else:
            return True


# Create your views here.
@api_view(['POST'])
def checkUserInDatabase(request):
    from .models import User
    userbool = User.objects.filter(username = request.data.get('username')).exists()
    if (userbool):
        return Response({'message': 'Username is taken.'})
    else:
        return Response({'message': ''})

@api_view(['POST'])
def checkEmailInDatabase(request):
    from .models import User
    emailbool = User.objects.filter(email = request.data.get('email')).exists()
    if (emailbool):
        return Response({'message': 'Email is taken.'})
    else:
        return Response({'message': ''})

@api_view(['POST'])
def register(request):
    username = request.data.get('username')
    password = request.data.get('password')
    email = request.data.get('email')
    birth_date = request.data.get('birth_date')

    if checkUsername(username) and checkPassword(password) and checkEmail(email) and checkDate(birth_date):
        from .models import User
        user = User(username=username, password=make_password(password), email=email, birth_date=birth_date)
        user.save()

        return HttpResponse(user.id)
    else:
        return HttpResponseBadRequest("Invalid request")

@api_view(['POST'])
def login(request):
    from .models import User

    userbool = User.objects.filter(username = request.data.get('username')).exists()

#trebam dodati userbool provjeru tj jel postoji user i jel korektan password

    if userbool is False:
        return HttpResponseBadRequest("No user")
    else:
        user = User.objects.get(username = request.data.get('username'))

        if check_password(request.data.get('password'), user.password):
            return HttpResponse(user.id)
        else:
            return HttpResponseBadRequest("Wrong password")