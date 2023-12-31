from django.contrib.auth import authenticate, login, logout
from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer, RifaSerializer, VentaSerializer
from .models import CustomUser, Rifa, Venta
from rest_framework.permissions import IsAdminUser, AllowAny, IsAuthenticated
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication

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
        token,_=Token.objects.get_or_create(user=user)
        if token:
            login(request, user)
            return Response({
                'token': token.key
            },
                status=status.HTTP_200_OK
            )
        return Response(
            status=status.HTTP_404_NOT_FOUND
        )

class LogoutView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        request.user.auth_token.delete()
        logout(request)
        return Response(
            status=status.HTTP_200_OK
        )
    
class UserViewSet(generics.ListAPIView):
    permission_classes = [IsAdminUser]
    queryset=CustomUser.objects.all()
    serializer_class= UserSerializer

class UserViewFilter(generics.RetrieveAPIView):
    permission_classes = [IsAdminUser]
    serializer_class= UserSerializer
    queryset = CustomUser.objects.all()
    lookup_field = "username"
    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)


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
    lookup_field = 'nombre_sorteo'

    def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)
    
class ListRifaFilter(generics.RetrieveAPIView):
    permission_classes = [IsAdminUser]
    serializer_class= RifaSerializer
    queryset = Rifa.objects.all()
    lookup_field = "nombre_sorteo"
    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)

#Clases referidas al carrito
class ListCarrito(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset=Venta.objects.all()
    serializer_class= VentaSerializer

class AddCarito(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request, format = None):
        serializer = VentaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                serializer.data, status=status.HTTP_201_CREATED
            )
        return Response(
            serializer.errors, status=status.HTTP_400_BAD_REQUEST
        )
    
class DeleteCarrito(generics.DestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Venta.objects.all()
    serializer_class= VentaSerializer
    lookup_field = 'id_venta'

    def delete(self, request, *args, **kwargs):
        return super().delete(request, *args, **kwargs)
    
class UpdateCarrito(generics.RetrieveUpdateAPIView):
    permission_classes = [IsAdminUser]
    serializer_class = VentaSerializer
    queryset = Venta.objects.all()
    lookup_field = 'titulo_rifa'

    def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)
    
class ListCarritoFilter(generics.RetrieveAPIView):
    permission_classes = [IsAdminUser]
    serializer_class= VentaSerializer
    queryset = Venta.objects.all()
    lookup_field = "titulo_rifa"
    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)