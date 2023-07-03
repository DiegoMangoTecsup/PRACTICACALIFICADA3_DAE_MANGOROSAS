from django.shortcuts import render
from rest_framework import viewsets
from .serializers import FormaPagoSerializer,movilidadPagoSerializer,movilidadSerializer
from .models import tbl_forma_pago,tbl_movilidad,tbl_movilidad_pago

# Create your views here.
class movilidadPagosView(viewsets.ModelViewSet):
    serializer_class = movilidadPagoSerializer
    queryset = tbl_movilidad_pago.objects.all()   
    
class formaPagosView(viewsets.ModelViewSet):
    serializer_class = FormaPagoSerializer
    queryset = tbl_forma_pago.objects.all()
    
class movilidadView(viewsets.ModelViewSet):
    serializer_class = movilidadSerializer
    queryset = tbl_movilidad.objects.all()