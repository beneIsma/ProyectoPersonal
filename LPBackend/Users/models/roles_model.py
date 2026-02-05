import secrets

from django.db import models


class RolSeleccion(models.TextChoices):
    PROP = "Propietario", "Propietario"
    ADMIN = "Admin", "Admin"
    GERENTE = "Gerente", "Gerente"
    PERSONAL = "Personal", "Personal"
    USER = "user", "User"
    DEV = "Developer", "Developer"
    ADMIN_PROP = "Admin-Propietario", "Admin-Propietario"

class Roles(models.Model):
    nombre = models.CharField(choices=RolSeleccion.choices, default=RolSeleccion.USER, unique=True, max_length=20, null=False, blank=False, verbose_name="Rol del usuario")
    slug = models.SlugField(max_length=50, blank=True, null=False, unique=True)
    default = models.BooleanField(default=False,verbose_name='Rol por defecto')

    class Meta:
        db_table = "Roles"
        verbose_name = "Rol"
        verbose_name_plural = "2-Roles"
        ordering = ["nombre"]

    def save(self, *args, **kwargs):
        if not self.slug:
            prov = secrets.token_hex(16)
            while Roles.objects.filter(slug=prov).exists():
                prov = secrets.token_hex(16)
            self.slug = prov

        rolDefecto = Roles.objects.filter(default=True).first()
        if rolDefecto and self.default and rolDefecto.id != self.id:
            self.default = False
        super().save(*args, **kwargs)

    def __str__(self):
        return self.nombre