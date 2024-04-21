from django.shortcuts import render
from rest_framework import generics, status
from .serializers import ClubSerializer
from .models import Club
from rest_framework.response import Response

# Create your views here.
class SingleClubView(generics.RetrieveUpdateAPIView):
    queryset = Club.objects.all()
    serializer_class = ClubSerializer

class UpdateUserClubView(generics.UpdateAPIView):
    queryset = Club.objects.all()
    serializer_class = ClubSerializer

    def update(self, request, pk):
        instance = self.get_object()
        instance.users.add(self.request.user)
        return Response(status = status.HTTP_200_OK)
           

class UserClubsView(generics.ListAPIView):
    serializer_class = ClubSerializer

    def get_queryset(self):
        user = self.request.user
        return Club.objects.filter(users=user)
    
