import secrets

from django.db import models


class Ciudades(models.TextChoices):
    SCZ = "Santa Cruz de la Sierra", "Santa Cruz"
    ELT = "El Alto", "El Alto"
    LPZ = "La Paz", "La Paz"
    COC = "Cochabamba", "Cochabamba"
    ORU = "Oruro", "Oruro"
    SUC = "Sucre", "Sucre"
    TAR = "Tarija", "Tarija"
    POT = "Potosí", "Potosí"
    SAC = "Sacaba", "Sacaba"
    QUI = "Quillacollo", "Quillacollo"
    MON = "Montero", "Montero"
    TRI = "Trinidad", "Trinidad"
    YAC = "Yacuiba", "Yacuiba"
    RIB = "Riberalta", "Riberalta"
    WAR = "Warnes", "Warnes"
    LAG = "La Guardia", "La Guardia"
    VIA = "Viacha", "Viacha"
    COL = "Colcapirhua", "Colcapirhua"
    TIQ = "Tiquipaya", "Tiquipaya"
    COB = "Cobija", "Cobija"
    GUI = "Guayaramerín", "Guayaramerín"
    VIL = "Villazón", "Villazón"
    YAP = "Yapacaní", "Yapacaní"
    BRM = "Bermejo", "Bermejo"
    CAM = "Camiri", "Camiri"
    TUP = "Tupiza", "Tupiza"
    LLA = "Llallagua", "Llallagua"
    SANB = "San Borja", "San Borja"
    COT = "Cotoca", "Cotoca"
    VYA = "Villa Yapacaní", "Villa Yapacaní"
    SDT = "Santiago del Torno", "Santiago del Torno"
    HUA = "Huanuni", "Huanuni"
    PUN = "Punata", "Punata"
    ASC = "Ascención de Guarayos", "Ascención de Guarayos"

class CiudadesModel(models.Model):
    ciudad = models.CharField(choices=Ciudades.choices, default=Ciudades.ASC, blank=False, null=False,verbose_name="Ciudad")
    slug = models.SlugField(unique=True, blank=True, null=True, verbose_name="Slug")

    def save(self, *args, **kwargs):
        if not self.slug:
            prov = secrets.token_hex(16)
            while CiudadesModel.objects.filter(slug=prov).exists():
                prov = secrets.token_hex(16)
            self.slug = prov
        super().save(*args, **kwargs)

    class Meta:
        db_table = "Ciudades"
        verbose_name = "8-Ciudad"
        verbose_name_plural = "8-Ciudades"

    def __str__(self):
        return self.ciudad