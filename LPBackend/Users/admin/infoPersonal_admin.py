from django.contrib import admin

from Users.models import InfoPersonal


class InfoPersonalAdmin(admin.ModelAdmin):
    list_display = ('ci','telefono','ciudad', 'direccion', 'edad','genero')
    list_filter = ('ciudad','genero')
    list_editable = ('telefono','ciudad', 'direccion', 'edad','genero')
    list_per_page = 10
    search_fields = ('telefono','ci')

    fieldsets = (
        ("Cédula de identidad", {"fields": ("ci",)}),
        ("Información Personal", {"fields": (
            'telefono',
            'ciudad',
            'direccion',
            'edad',
            'genero'
        )})
    )

admin.site.register(InfoPersonal,InfoPersonalAdmin)