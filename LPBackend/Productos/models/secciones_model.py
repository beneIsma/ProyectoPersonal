from django.db import models


class SeccionesCategoria(models.Model):
    categoria = models.ForeignKey("CategoriasModel", on_delete=models.SET_NULL, blank=False, null=True, verbose_name="¿A qué categoría pertenece la sección?")
    nombre = models.CharField(blank=False, null=False, max_length=20, verbose_name="Sección")
    imagen = models.ImageField(upload_to="imagesSecciones/", blank=True, null=True)

    def save(self, *args, **kwargs):
        if self.imagen and self.nombre:
            extension = self.imagen.name.split('.')[-1]
            self.imagen.name = f"{self.nombre}.{extension}"
        super().save(*args, **kwargs)

    class Meta:
        db_table = "SecciónesPorCategoría"
        verbose_name = "6-Sección"
        verbose_name_plural = "6-Secciones"

    def __str__(self):
        return self.nombre