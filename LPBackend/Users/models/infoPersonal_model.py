from django.db import models

class Genero(models.TextChoices):
    M = "M", "Masculino"
    F = "F", "Femenino"

class InfoPersonal(models.Model):
    ciudad = models.ForeignKey("CiudadesModel", on_delete=models.SET_NULL, blank=False, null=True, verbose_name="Ciudad")
    edad = models.PositiveIntegerField(default=18, choices=[(i,i) for i in range (18,99)], blank=False, null=False, verbose_name="Edad")
    direccion = models.CharField(max_length=100, blank=False, null=False, verbose_name="Dirección")
    telefono = models.CharField(max_length=12, blank=False, null=False, verbose_name="Teléfono")
    ci = models.CharField(max_length=10, blank=False, null=False, verbose_name="Cedula de idéntidad")
    genero = models.CharField(choices=Genero.choices, default=Genero.M, blank=False, null=False, verbose_name="Género")

    class Meta:
        db_table = "Información Personal"
        verbose_name = "7-Info Personal"
        verbose_name_plural = "7-Info Personal"

    def __str__(self):
        return self.telefono