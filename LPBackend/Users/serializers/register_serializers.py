
from django.db import transaction
from rest_framework import serializers

from Users.models import Users, InfoPersonal, Roles, Ciudades, CiudadesModel
from Users.models.infoPersonal_model import Genero


class RegistroSerializers(serializers.ModelSerializer):
    nombre = serializers.CharField(required=True, allow_blank=False, allow_null=False, max_length=50)
    apellidos = serializers.CharField(required=True, allow_blank=False, allow_null=False, max_length=50)
    email = serializers.EmailField(required=True, allow_blank=False, allow_null=False, max_length=50)
    password1 = serializers.CharField(write_only=True,required=True, allow_blank=False, allow_null=False, min_length=8, max_length=12)
    password2 = serializers.CharField(write_only=True,required=True, allow_blank=False, allow_null=False, min_length=8, max_length=12)
    edad = serializers.IntegerField(min_value=18, max_value=99, default=18)
    ciudad = serializers.ChoiceField(
        choices=Ciudades.choices,
        default=Ciudades.ASC,
        error_messages= {"error":"Error al seleccionar la ciudad"}
    )
    direccion = serializers.CharField(required=True, allow_blank=False, allow_null=False, max_length=50)
    telefono = serializers.CharField(required=True, allow_blank=False, allow_null=False, max_length=12)
    ci = serializers.CharField(required=True, allow_blank=False, allow_null=False, max_length=10)
    genero = serializers.ChoiceField(choices=Genero.choices, default=Genero.M, allow_null=False, allow_blank=False)


    class Meta:
        model = Users
        fields = (
            "nombre", "apellidos", "email",
            "edad", "ciudad", "direccion",
            "telefono", "ci", "genero", "password1",
            "password2",
       )

    def validate_email(self,email):
        return email
    def validate_password(self,password):
        return password
    def validate_edad(self,edad):
        return edad
    def validated_telefono(self,telefono):
        return telefono
    def validate_ci(self,ci):
        return ci
    def validate(self, attrs):
        if attrs["password1"] != attrs["password2"]:
            raise serializers.ValidationError("La contraseña no coincide")
        return attrs

    @transaction.atomic
    def create(self, validated_data):
        validated_data.pop("password2")

        password = validated_data.pop("password1")
        ciudad_nombre = validated_data["ciudad"]

        ciudad_obj = CiudadesModel.objects.get(ciudad=ciudad_nombre)

        print(validated_data["edad"])
        personalInfo = InfoPersonal.objects.create(
            ciudad = ciudad_obj,
            edad = validated_data["edad"],
            direccion = validated_data["direccion"],
            telefono = validated_data["telefono"],
            ci = validated_data["ci"],
            genero = validated_data["genero"]
        )

        rolDefecto = Roles.objects.filter(default = True).first()
        if not rolDefecto:
            rolDefecto = Roles.objects.all().first()
            if not rolDefecto:
                raise serializers.ValidationError("No se puede crear un rol de defecto")
        user = Users.objects.create(
            nombre = validated_data["nombre"],
            apellidos = validated_data["apellidos"],
            email = validated_data["email"],
            personalInfo = personalInfo,
            rol = rolDefecto
        )

        user.set_password(password)
        user.save()
        return user
