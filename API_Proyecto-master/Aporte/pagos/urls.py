from rest_framework import routers
from .api import movilidadPagoViewSet,movilidadViewSet,formaPagoViewSet

routers= routers.DefaultRouter()

routers.register('api/movilidad', movilidadViewSet, 'movilidad')
routers.register('api/movilidadPago', movilidadPagoViewSet, 'movilidadPago')
routers.register('api/formaPago', formaPagoViewSet, 'formaPago')

urlpatterns = routers.urls