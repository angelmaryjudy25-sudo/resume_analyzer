from django.contrib import admin
from django.urls import path, include
from core.views import RegisterView, CustomTokenObtainPairView, CustomTokenRefreshView, LogoutView, UserProfileView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/register/', RegisterView.as_view(), name='register'),
    path('api/login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', CustomTokenRefreshView.as_view(), name='token_refresh'),
    path('api/logout/', LogoutView.as_view(), name='logout'),
    path('api/profile/', UserProfileView.as_view(), name='user_profile'),
]
