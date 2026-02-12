from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from Productos.models import SeccionesCategoria


class SeccionesPorCategoriaView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        secciones = SeccionesCategoria.objects.all().order_by('-categoria')
        data = [{
                "categoria": s.categoria.nombre,
                "nombre": s.nombre,
                "imagen": "" if not s.imagen else request.build_absolute_uri(s.imagen.url)
            }for s in secciones]

        return Response({"data":data, "success":True}, status=status.HTTP_200_OK)