from django.contrib import admin

from Productos.models import ProductoModel


class ProductoAdmin(admin.ModelAdmin):
    list_display = ('nombre','categoria','seccion','precioCompra','precioVenta','proveedor','marca','descripcion', 'slug')
    list_filter = ('categoria','proveedor','marca')
    search_fields = ('nombre','categoria','proveedor','marca')
    list_per_page = 20
    list_editable = ('proveedor','seccion',)

    fieldsets = (
        ('Información del producto', {
            'fields': (
                'nombre', 'marca','categoria','seccion','precioCompra','precioVenta','descripcion'
            )
        }),
        ('Proveedores', {
            'fields': ('proveedor',)
        })
    )

admin.site.register(ProductoModel,ProductoAdmin)