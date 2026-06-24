from rest_framework import generics, status, permissions
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework_simplejwt.tokens import RefreshToken
from django.conf import settings
from .serializers import UserSerializer, UserProfileSerializer
from .models import User

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = UserSerializer

class LogoutView(generics.GenericAPIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request):
        try:
            refresh_token = request.COOKIES.get(settings.SIMPLE_JWT['JWT_AUTH_COOKIE'])
            if refresh_token:
                token = RefreshToken(refresh_token)
                token.blacklist()
            
            response = Response({"detail": "Successfully logged out."}, status=status.HTTP_200_OK)
            response.delete_cookie(settings.SIMPLE_JWT['JWT_AUTH_COOKIE'])
            return response
        except Exception as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)

class CustomTokenObtainPairView(TokenObtainPairView):
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        if response.status_code == 200:
            refresh_token = response.data['refresh']
            access_token = response.data['access']
            
            # Remove refresh token from response body
            del response.data['refresh']
            
            # Set refresh token in httpOnly cookie
            response.set_cookie(
                key=settings.SIMPLE_JWT['JWT_AUTH_COOKIE'],
                value=refresh_token,
                httponly=True,
                secure=not settings.DEBUG, # Secure in production
                samesite='Lax',
                max_age=settings.SIMPLE_JWT['REFRESH_TOKEN_LIFETIME'].total_seconds()
            )
        return response

class CustomTokenRefreshView(TokenRefreshView):
    def post(self, request, *args, **kwargs):
        refresh_token = request.COOKIES.get(settings.SIMPLE_JWT['JWT_AUTH_COOKIE'])
        
        if refresh_token:
            request.data['refresh'] = refresh_token
            
        response = super().post(request, *args, **kwargs)
        
        if response.status_code == 200:
            # If sliding window refresh is enabled, we could update the cookie here
            pass
            
        return response

class UserProfileView(generics.RetrieveAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = UserProfileSerializer

    def get_object(self):
        return self.request.user
