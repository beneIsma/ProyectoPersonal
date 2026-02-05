from django.db import models

class InventarioModel(models.Model):

    producto = models.ForeignKey("ProductoModel", on_delete=models.SET_NULL, null=True, blank=False, verbose_name="Producto asociado", related_name='productos')
    stockEnTienda = models.PositiveIntegerField(blank=False, null=False, verbose_name="Stock en tienda")
    stockEnAlmacen = models.PositiveIntegerField(blank=False, null=False, verbose_name="Stock en almacén")
    fecha_creacion = models.DateField(auto_now=True, blank=False, null=False, verbose_name="Fecha de creación")
    fecha_actualizacion = models.DateTimeField(auto_now_add=True, blank=False, null=False, verbose_name="Fecha de actualización")

    class Meta:
        db_table = "Inventario"
        verbose_name = "Inventario"
        verbose_name_plural = "5-Inventario"

    def __str__(self):
        return self.producto.nombre