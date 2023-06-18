from rest_framework import serializers
from .models import *
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password

class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True
    )
    username = serializers.CharField(
        required=True
    )
    password = serializers.CharField(
        min_length=8
    )

    class Meta:
        model = get_user_model()
        fields = (
            'id',
            'email', 
            'username', 
            'password',
            'nombre',
            'apellido',
            'DNI',
            'telefono',
            'provincia',
            'ciudad',
            )

    def validate_password(self, value):
        return make_password(value)
    
class RifaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rifa
        fields = '__all__'

class VentaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Venta
        fields = '__all__'