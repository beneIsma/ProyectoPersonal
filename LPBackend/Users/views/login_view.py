from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from Users.serializers.login_serializers import LoginSerializers


class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):

        serializer = LoginSerializers(data=request.data)

        if not serializer.is_valid():
            print(request)
            print(serializer.errors)
            return Response(serializer.errors, status= status.HTTP_400_BAD_REQUEST)
        else:
            return Response(serializer.validated_data, status= status.HTTP_200_OK)
