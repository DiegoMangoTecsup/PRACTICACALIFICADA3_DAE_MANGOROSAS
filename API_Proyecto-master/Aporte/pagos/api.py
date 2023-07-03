from .models import tbl_forma_pago,tbl_movilidad,tbl_movilidad_pago
from rest_framework import viewsets, permissions
from .serializers import FormaPagoSerializer, movilidadPagoSerializer, movilidadSerializer

class movilidadViewSet(viewsets.ModelViewSet):
    queryset = tbl_movilidad.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = movilidadSerializer
    
class movilidadPagoViewSet(viewsets.ModelViewSet):
    queryset = tbl_movilidad_pago.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = movilidadPagoSerializer
    
class formaPagoViewSet(viewsets.ModelViewSet):
    queryset = tbl_forma_pago.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = FormaPagoSerializer