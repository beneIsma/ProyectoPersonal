from django.db import models
from Productos.models.producto_model import ProductoModel

class ImagenModel(models.Model):

    producto = models.OneToOneField("ProductoModel", on_delete=models.CASCADE, blank=False,null=True, verbose_name="Producto asociado",related_name="image")
    nombre = models.CharField(unique=True, max_length=20, blank=False, null=False, verbose_name="Nombre de la imágen")
    imagen = models.ImageField(upload_to="images/", blank=True, null=True)

    def save(self, *args, **kwargs):
        if self.imagen and self.producto:
            extension = self.imagen.name.split('.')[-1]
            self.imagen.name = f"{self.producto.slug}.{extension}"
        super().save(*args, **kwargs)

    class Meta:
        db_table = "ImágenesProductos"
        verbose_name = "Imágen"
        verbose_name_plural = "3-Imágen Producto"

    def __str__(self):
        return f"Imágen del producto => {self.producto.nombre}"
