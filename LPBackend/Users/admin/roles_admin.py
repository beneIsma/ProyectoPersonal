from django.contrib import admin
from Users.models import Roles

class RolesAdmin(admin.ModelAdmin):
    list_display = ('nombre','slug')
    list_filter = ('nombre',)
    search_fields = ('nombre',)

    fieldsets = (
    ("Información",{'fields':('nombre','slug')}),
    ("Configuración", {'fields': ()})
    )
admin.site.register(Roles,RolesAdmin)