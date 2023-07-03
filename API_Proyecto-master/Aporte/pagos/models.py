from django.db import models

# Create your models here.
class tbl_movilidad(models.Model):
    movilidad_id = models.AutoField(primary_key=True)
    movilidad_tipo_servicio = models.CharField(max_length=45)
    movilidad_turno = models.CharField(max_length=45)
    movilidad_seccion = models.CharField(max_length=45)
    movilidad_docente = models.CharField(max_length=255)
    movilidad_pago = models.FloatField(default=0)

    def __str__(self):
        return self.movilidad_docente

class tbl_forma_pago(models.Model):
    forma_pago_id = models.AutoField(primary_key=True)
    forma_pago_nombre = models.CharField(max_length=45)
    forma_pago_referencia = models.CharField(max_length=100, null=True)
    
    def __str__(self):
        return self.forma_pago_nombre

class tbl_movilidad_pago(models.Model):
    movilidad_pago_id = models.AutoField(primary_key=True)
    movilidad_pago_fecha = models.DateField()
    movilidad_pago_monto = models.FloatField(default=0)
    movilidad = models.ForeignKey(tbl_movilidad, on_delete=models.CASCADE)
    forma_pago = models.ForeignKey(tbl_forma_pago, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.movilidad