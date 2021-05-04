from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.views.decorators.csrf import ensure_csrf_cookie

from .serializers import UserSerializer
from .models import User
from django.contrib.auth import get_user_model
# Create your views here.

class AllUsersListView(APIView):

    def get(self, request):
        users = User.objects.filter(is_active=True)

        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

class UsersListView(APIView):

    def get(self, request):
        users = User.objects.all().filter(is_staff = False, is_active=True)
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

class AdminsListView(APIView):

    def get(self, request):
        admins = User.objects.all().filter(is_staff = True,  
                                         is_superuser = False,
                                         is_active=True)
        serializer = UserSerializer(admins, many=True)
        return Response(serializer.data)

class SuperusersListView(APIView):

    def get(self, request):
        superusers = User.objects.all().filter(is_staff = True, 
                                         is_superuser = True,
                                         is_active=True)
        serializer = UserSerializer(superusers, many=True)
        return Response(serializer.data)

class UsersList(APIView):
    def get(self, request):
        users = User.objects.all().filter(is_staff = False, is_active=True)
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data, content_type="application/json")


class AdminsList(APIView):

    def get(self, request):
        admins = User.objects.all().filter(is_staff = True,  
                                         is_superuser = False,
                                         is_active=True)
        serializer = UserSerializer(admins, many=True)
        return Response(serializer.data, content_type="application/json")

class SuperusersList(APIView):

    def get(self, request):
        superusers = User.objects.all().filter(is_staff = True, 
                                         is_superuser = True,
                                         is_active=True)
        serializer = UserSerializer(superusers, many=True)
        return Response(serializer.data, content_type="application/json")



