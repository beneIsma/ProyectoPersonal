from django.contrib import admin
from Users.models import Users


class UsersAdmin(admin.ModelAdmin):
    list_display = ('email','nombre', 'apellidos', 'rol')
    list_per_page = 10
    list_filter = ('nombre', 'rol__nombre')
    list_display_links = ('email',)
    list_editable = ('rol',)
    search_fields = ('nombre','apellidos','email','rol__nombre')

    fieldsets = (
        ("Información Personal", {'fields': ('nombre','apellidos','email')}),
        ("Configuración", {'fields': ('rol',)})
    )


admin.site.register(Users,UsersAdmin)