from django.contrib import admin

from Productos.models import ProductoModel


class ProductoAdmin(admin.ModelAdmin):
    list_display = ('nombre','categoria','precioCompra','precioVenta','proveedor','marca', 'slug')
    list_filter = ('categoria','proveedor','marca')
    search_fields = ('nombre','categoria','proveedor','marca')
    list_per_page = 20
    list_editable = ('proveedor',)

    fieldsets = (
        ('Información del producto', {
            'fields': (
                'nombre', 'marca','categoria','precioCompra','precioVenta'
            )
        }),
        ('Proveedores', {
            'fields': ('proveedor',)
        })
    )

admin.site.register(ProductoModel,ProductoAdmin)