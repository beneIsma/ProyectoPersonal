from django.db import models
from rest_framework.fields import DateTimeField


class ProveedorModel(models.Model):
    nombreEmpresa = models.CharField(unique=True, max_length=50, blank=True, null=True, verbose_name="Empresa")
    nombreProveedor = models.CharField(max_length=50, blank=False, null=False, verbose_name="Nombre", help_text="Proveedor")
    apellidosProveedor = models.CharField(max_length=50, blank=True, null=True, verbose_name="Apellidos")
    direccion = models.CharField(max_length=100, blank=True, null=True, verbose_name="Dirección completa")
    descripcion = models.TextField(max_length=500, blank=True, null=True, verbose_name="Descripción", help_text="Breve descripción de los servicios del proveedor")
    telefono = models.CharField(max_length=15, blank=False, null=False, verbose_name="Teléfono")
    fechaContratacion = models.DateField(auto_now=True, blank=False, null=False, verbose_name="Fecha de contratación")
    fechaDeExtincionDeContrato = models.DateTimeField(auto_now_add=True, blank=False, null=False, verbose_name="Fecha de extinción del contrato")

    class Meta:
        db_table = "Proveedores"
        verbose_name = "Proveedor"
        verbose_name_plural = "4-Proveedores"

    def __str__(self):
        return self.nombreProveedor