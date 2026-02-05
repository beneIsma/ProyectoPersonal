from django.contrib import admin
from Productos.models import CategoriasModel

class CategoriaAdmin(admin.ModelAdmin):
    list_display = ('nombre','creado','actualizado')
    readonly_fields = ('creado','actualizado')
    search_fields = ('nombre',)
    list_filter = ('nombre', 'creado')
    list_per_page = 10
    fieldsets = (
        ("Información", {'fields': ('nombre','descripcion')}),
        ("Fecha", {'fields': ('creado', 'actualizado')})
    )

admin.site.register(CategoriasModel,CategoriaAdmin)