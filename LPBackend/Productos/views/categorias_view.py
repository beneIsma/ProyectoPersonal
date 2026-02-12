from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from Productos.models import CategoriasModel


class CategoriasView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        categorias = CategoriasModel.objects.all()
        data = [{"nombre":c.nombre} for c in categorias]

        return Response ({"data":data, "success":True}, status= status.HTTP_200_OK)