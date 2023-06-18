from django.urls import path, include, re_path
from .views import *
from rest_framework.authtoken import views
urlpatterns = [
    path('auth/signup/', SigupView.as_view(), name='auth_signup'),
    path('auth/login/', LoginView.as_view(), name='auth_login'),
    path('auth/logout/', LogoutView.as_view(), name='auth_logout'),
    
    path('auth/list/', UserViewSet.as_view(), name='auth_user'),
    path('auth/filter/<str:username>', UserViewFilter.as_view(), name='auth_filter'),
    path('auth/update/<str:username>', UpdateUser.as_view(), name='actualizar_user'),
    path('auth/delete/<str:username>', DeleteUser.as_view(), name='eliminar_user'),
    
    path('rifa/add/', AddRifa.as_view(), name='agregar_rifa'),
    path('rifa/list/', ListRifa.as_view(), name='listar_rifa'),
    path('rifa/delete/<int:id_rifa>', DeleteRifa.as_view(), name='eliminar_rifa'),
    path('rifa/update/<int:id_rifa>', UpdateRifa.as_view(), name='actualizar_rifa'),

    path('auth/genToken', views.obtain_auth_token),
    path('carrito/add', AddCarito.as_view(), name='añadir_carrito'),
    path('carrito/delete/<int:id_venta>', DeleteCarrito.as_view(), name='eliminar_carrito'),
    path('carrito/update/<int:id_venta>', UpdateCarrito.as_view(), name='actualizar_carrito'),
]
