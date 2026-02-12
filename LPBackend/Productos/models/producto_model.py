from django.core.exceptions import ValidationError
from django.db import models
from django.template.defaultfilters import slugify


def validarPrecio(value):
    if value < 0:
        raise ValidationError("El precio no puede ser un precio negativo")
    return value

class ProductoModel(models.Model):

    nombre = models.CharField(
        unique=True,
        blank=False,
        null=False,
        verbose_name="Nombre del producto",
        max_length=30,
        help_text="Campo obligatorio",
        error_messages={
            'required': 'Por favor el nombre del producto es un campo obligatorio',
            'max_length': 'Superaste el máximo permitido de carácteres'
        }
    )
    slug = models.SlugField(unique=True, max_length=20, blank=True, null=False, verbose_name="Slug")
    categoria = models.ForeignKey("CategoriasModel", on_delete=models.SET_NULL, null=True, blank=False, related_name="categorias")
    precioCompra = models.FloatField(blank=False, null=False, verbose_name="Precio de compra (Bs)", validators=[validarPrecio])
    precioVenta = models.FloatField(blank=False, null=False, verbose_name="Precio de venta (Bs)", validators=[validarPrecio])
    proveedor = models.ForeignKey("ProveedorModel",on_delete=models.SET_NULL, blank=False, null=True, verbose_name="Proveedor")
    marca = models.CharField(unique=True, max_length=20, blank=False, null=False,verbose_name="Marca")
    descripcion = models.TextField(max_length=100,blank=True, null=True, verbose_name="Descripción")


    def save(self, *args, **kwargs):
        if not self.slug:
            prov = slugify(self.nombre)
            cont = 1
            while ProductoModel.objects.filter(slug= prov).exclude(id = self.id).exists():
                prov = f"{slugify(self.nombre)}-{cont}"
                cont +=1
            self.slug = prov
        if ProductoModel.objects.filter(nombre = self.nombre).exclude(id=self.id).exists():
            raise ValueError("El nombre ya existe, por favor cambie el nombre del poducto.")
        super().save(*args, **kwargs)

    class Meta:
        db_table = "Productos"
        verbose_name = "Producto"
        verbose_name_plural = "1-Productos"

    def __str__(self):
        return self.nombre