from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated


class AuthAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return HttpResponse('Ты залогинен!')
    

    