import secrets

from django.db import models


class CategoriasModel(models.Model):
    nombre = models.CharField(max_length=30, blank=False, null=False, verbose_name="Categoría")
    slug = models.SlugField(unique=True, blank=True, null=False, verbose_name="Slug")
    descripcion = models.TextField(max_length=100, blank=True, null=True, verbose_name="Descripción")
    #DateField = (año,mes,día)
    #DateFieldTime = (año,mes,día,hora,minuto y segundos)
    creado = models.DateField(auto_now=True,null=False, blank=False, verbose_name="Fecha de creación")
    actualizado = models.DateTimeField(auto_now_add=True, null=False, blank=False, verbose_name="Fecha de actualización")


    def save(self, *args, **kwargs):
        if not self.slug:
            prov = secrets.token_hex(16)
            while CategoriasModel.objects.filter(slug=prov).exists():
                prov = secrets.token_hex(16)
            self.slug = prov
        super().save(*args, **kwargs)

    class Meta:
        db_table = "Categorias"
        verbose_name = "Categoria"
        verbose_name_plural = "2-Categorias"

    def __str__(self):
        return self.nombre

