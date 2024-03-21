from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from .serializers import AdministratorSerializer
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view, permission_classes  
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.permissions import IsAuthenticated
from .  import models
import json

# Create your views here.
@api_view(['POST'])
def register_admin(request):
    if request.method == 'POST':
        serializer = AdministratorSerializer(data = request.data)
        if serializer.is_valid():
            admin = serializer.save()
            token = Token.objects.create(user=admin)
            return Response({
                "admin": serializer.data,
                "token": token.key
            })
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['POST'])
def login_admin(request):
    if request.method == 'POST':
        email = request.data.get('email')
        password = request.data.get('password')
        admin = None 
        if '@' in email:
            try:
                admin = models.Administrator.objects.get(email=email)
            except ObjectDoesNotExist:
                pass
        if not admin:
            admin = authenticate(email=email, password=password)    
        if admin:
            token, _ = Token.objects.get_or_create(admin=admin)
            return Response({'token':token.key},status=status.HTTP_200_OK)
        return Response({'error':'Invalid creds'}, status=status.HTTP_401_UNAUTHORIZED)
    
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def admin_logout(request):
    if request.method == 'POST':
        try:
            request.admin.auth_token.delete()
            return Response({'message': 'Successfully logged out.'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)