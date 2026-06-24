from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    """
    Registration serializer — recruiter-only.
    The 'role' field is excluded from client input; it is always set to 'recruiter'.
    """
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        # 'role' intentionally omitted from fields so the client cannot send it.
        fields = ('id', 'username', 'email', 'password', 'company_name')

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data.get('email', ''),
            password=validated_data['password'],
            role='recruiter',  # always recruiter; candidates have no accounts
            company_name=validated_data.get('company_name', '')
        )
        return user

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'role', 'company_name')
