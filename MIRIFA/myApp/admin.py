from django.contrib import admin
from .models import Medio_Pago, Factura,Rifa, Venta
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import Group
# Register your models here.

class Medio_PagoAdmin(admin.ModelAdmin):
    list_display = ('nombre','id_medio_pago')

admin.site.register(Medio_Pago,Medio_PagoAdmin)


class FacturaAdmin(admin.ModelAdmin):
    list_display = ('id_factura','total','fecha')

admin.site.register(Factura,FacturaAdmin)


class RifaAdmin(admin.ModelAdmin):
    list_display = ('id_rifa','nombre_sorteo','organizador','premio1','premio2','premio3')

admin.site.register(Rifa,RifaAdmin)

class VentaAdmin(admin.ModelAdmin):
    list_display = ('id_venta','cantidad','descuento')

admin.site.register(Venta, VentaAdmin)

@admin.register(get_user_model())
class CustomUserAdmin(UserAdmin):
    pass