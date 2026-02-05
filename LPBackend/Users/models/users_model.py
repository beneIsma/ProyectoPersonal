from django.contrib.auth.base_user import BaseUserManager, AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.conf import settings
from django.db import models
from django.template.defaultfilters import join
import re

EMAIL_REGEX = re.compile(r"[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]{2,}")
PASSWORD_REGEX = re.compile(r"(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*[^a-zA-Z0-9])[a-zA-Z\d]{6,}")

class CustomUser(BaseUserManager):
    def create_user(self, email=None, password=None, **extra_fields):

        if not email:
            raise ValueError("El campo email es obligatorio")
        if "@" not in email:
            raise ValueError("Falta el '@' al campo email")
        if any(ext in email for ext in settings.EXTENSIONES_BLACKLIST):
            raise ValueError(f"Extensión no válida: \n Lista de extensiones no válidas: {', '.join(settings.EXTENSIONES_BLACKLIST)}")
        if not EMAIL_REGEX.fullmatch(email):
            raise ValueError("Email no válido")

        if not password:
            raise ValueError("El campo contraseña es obligatorio")
        if not PASSWORD_REGEX.fullmatch(password):
            raise ValueError("La contraseña debe contener al menos una mayúscula, una minúscula, un dígito y un mínimo de"
                             "caracteres de 6")

        email = self.normalize_email(email)
        extra_fields["email"] = email
        user = self.model(**extra_fields)
        #user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email=None, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        return self.create_user(email,password, **extra_fields)

class Users(AbstractBaseUser, PermissionsMixin):
    nombre = models.CharField(max_length=20, null=False, blank=False, verbose_name="Nombre de usuario")
    apellidos = models.CharField(max_length=50, null=False, blank=False, verbose_name= "Apellidos")
    email = models.CharField(unique=True, max_length=100, null=False, blank=False, verbose_name="Email")
    is_active = models.BooleanField(default=True, verbose_name="¿Usuario activo?")
    rol = models.ForeignKey("Roles", on_delete=models.SET_NULL, blank=False, null=True, verbose_name="Rol usuario")
    is_staff = models.BooleanField(default=False, verbose_name="¿Tiene permisos de staff?")
    is_superuser = models.BooleanField(default=False, verbose_name="¿Es superusuario?")


    objects = CustomUser() #Usamos mi modelo personalizado en vez del modelo que nos da Django por defecto.
    USERNAME_FIELD = 'email' #El campo único para login NO es username, es email.
    REQUIRED_FIELDS = [] #A la hora de la creación de un superusuario, aquí nos pedirán los campos requeridos.

    class Meta:
        db_table = "Users"
        verbose_name = "User"
        verbose_name_plural = "1-Users"
        ordering = ['-is_superuser']

    def __str__(self):
        return self.nombre