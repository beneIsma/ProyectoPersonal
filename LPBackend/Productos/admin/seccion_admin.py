from django.contrib import admin
from django.utils.html import format_html

from Productos.models import SeccionesCategoria


class SeccionAdmin(admin.ModelAdmin):
    list_display = ('categoria','nombre','imagen')
    list_filter = ('categoria',)
    list_editable = ('nombre',)
    list_per_page = 10
    search_fields = ('nombre',)

    def imagen_tag(self, obj):
        #Comprueba si el objeto tiene una imagen (un campo ImageField o similar llamado imagen).
        if obj.imagen:
            #Genera HTML seguro usando format_html. Muestra la imagen
            return format_html('<img src="{}" width="50" />', obj.imagen.url)
        #Esto hace que se vea la imagen en el admin, no solo la ruta del archivo (return "").
        return ""
    #Si no hay imagen, devuelve vacío (no muestra nada).
    imagen_tag.short_description = 'Imagen'

admin.site.register(SeccionesCategoria,SeccionAdmin)