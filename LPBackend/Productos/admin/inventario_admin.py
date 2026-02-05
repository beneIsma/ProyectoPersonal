from django.contrib import admin
from Productos.models import InventarioModel

class InventarioAdmin(admin.ModelAdmin):
    list_display = ('producto','stockEnTienda','stockEnAlmacen','fecha_creacion','fecha_actualizacion')
    list_editable = ('stockEnTienda','stockEnAlmacen')
    search_fields = ('producto',)
    list_per_page = 20
    list_filter = ('producto',)

    fieldsets = (
        ('Información del producto', {'fields': (
            'producto',
        )}),
        ('Stock', {'fields': (
            'stockEnTienda',
            'stockEnAlmacen',
        )})
    )

admin.site.register(InventarioModel,InventarioAdmin)