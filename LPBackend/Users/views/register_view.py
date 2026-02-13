from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from Users.serializers.register_serializers import RegistroSerializers


class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self,request):

        print(request.data)
        serializer = RegistroSerializers(data=request.data)

        if not serializer.is_valid():
            print(serializer.errors)
            return Response({"success":False}, status=status.HTTP_400_BAD_REQUEST)
        else:
            user = serializer.save()
            print(user)
            return Response({"success":True}, status=status.HTTP_201_CREATED)