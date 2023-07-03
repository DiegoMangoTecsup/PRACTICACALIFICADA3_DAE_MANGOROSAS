from rest_framework import serializers
from .models import tbl_forma_pago,tbl_movilidad,tbl_movilidad_pago

class FormaPagoSerializer(serializers.ModelSerializer):
    class Meta:
        model = tbl_forma_pago
        fields = '__all__'
        
class movilidadSerializer(serializers.ModelSerializer):
    class Meta:
        model = tbl_movilidad
        fields = '__all__'
        
class movilidadPagoSerializer(serializers.ModelSerializer):
    class Meta:
        model = tbl_movilidad_pago
        fields = '__all__'