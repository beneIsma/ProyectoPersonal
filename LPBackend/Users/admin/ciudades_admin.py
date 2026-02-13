from django.contrib import admin

from Users.models import CiudadesModel


class CiudadesAdmin(admin.ModelAdmin):
    list_display = ('ciudad','slug')

admin.site.register(CiudadesModel,CiudadesAdmin)