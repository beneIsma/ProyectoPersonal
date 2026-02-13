from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from Users.models import CiudadesModel


class CiudadesView(APIView):
    permission_classes = [AllowAny]

    def get(self,request):

        ciudades = CiudadesModel.objects.all()
        data =  [{
            "ciudad": c.ciudad,
            "slug": c.slug
        }for c in ciudades]
        print(request)
        return Response({"data":data, "success": True}, status= status.HTTP_200_OK)