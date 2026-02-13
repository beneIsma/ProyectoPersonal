from django.contrib import admin
from Users.models import Roles

class RolesAdmin(admin.ModelAdmin):
    list_display = ('rol','slug','default')
    list_filter = ('nombre',)
    search_fields = ('nombre',)
    list_editable = ('default',)

    @admin.display(description="ROL USUARIO")
    def rol(self, obj):
        return f"ROL-->{obj.nombre}"

    fieldsets = (
    ("Información",{'fields':('nombre','slug')}),
    ("Configuración", {'fields': ()})
    )
admin.site.register(Roles,RolesAdmin)