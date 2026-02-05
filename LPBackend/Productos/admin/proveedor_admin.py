from django.contrib import admin

from Productos.models import ProveedorModel


class ProveedorAdmin(admin.ModelAdmin):
    list_display = ('nombreEmpresa', 'nombreProveedor', 'direccion', 'telefono', 'fechaContratacion', 'fechaDeExtincionDeContrato')
    list_filter = ('nombreEmpresa', 'nombreProveedor','telefono')
    search_fields = ('nombreEmpresa', 'nombreProveedor','telefono')
    list_per_page = 10

    fieldsets = (
        ('Información del proveedor', {'fields': (
            'nombreEmpresa',
            'nombreProveedor',
            'apellidosProveedor',
            'direccion',
            'telefono',
        )}),
        ('Descripcion', {'fields': (
            'descripcion',
        )})
    )

admin.site.register(ProveedorModel, ProveedorAdmin)