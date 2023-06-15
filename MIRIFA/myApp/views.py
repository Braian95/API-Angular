from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer, RifaSerializer
from .models import CustomUser, Rifa
from rest_framework.permissions import IsAdminUser, AllowAny, IsAuthenticated

# Create your views here.

#Clases referidas al usuario
class SigupView(generics.CreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = UserSerializer

class LoginView(APIView):
    permission_classes = [AllowAny] 
    def post(self, request):
        username = request.data.get('username', None)
        password = request.data.get('password', None)
        user = authenticate(username=username, password=password)
        if user:
            login(request, user)
            return Response(
                UserSerializer(user).data,
                status=status.HTTP_200_OK
            )
        return Response(
            status=status.HTTP_404_NOT_FOUND
        )

class LogoutView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        logout(request)
        return Response(
            status=status.HTTP_200_OK
        )
    
class UserViewSet(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    queryset=CustomUser.objects.all()
    serializer_class= UserSerializer

class UpdateUser(generics.RetrieveUpdateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = UserSerializer
    queryset = CustomUser.objects.all()
    lookup_field = 'username'

    def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)

class DeleteUser(generics.DestroyAPIView):
    permission_classes = [IsAdminUser]
    serializer_class= UserSerializer
    queryset = CustomUser.objects.all()
    lookup_field = 'username'

    def delete(self, request, *args, **kwargs):
        return super().delete(request, *args, **kwargs)

#Clases referidas a las rifas

class AddRifa(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request, format=None):
        serializer = RifaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                serializer.data, status=status.HTTP_201_CREATED
            )
        return Response(
            serializer.errors, status=status.HTTP_400_BAD_REQUEST
        )

class ListRifa(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset=Rifa.objects.all()
    serializer_class= RifaSerializer

class DeleteRifa(generics.DestroyAPIView):
    permission_classes = [IsAdminUser]
    queryset=Rifa.objects.all()
    serializer_class= RifaSerializer
    lookup_field = 'id_rifa'
    
    def delete(self, request, *args, **kwargs):
        return super().delete(request, *args, **kwargs)
    
class UpdateRifa(generics.RetrieveUpdateAPIView):
    permission_classes = [IsAdminUser]
    serializer_class = RifaSerializer
    queryset = Rifa.objects.all()
    lookup_field = 'id_rifa'

    def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)