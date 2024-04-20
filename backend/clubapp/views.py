from django.shortcuts import render
from rest_framework import generics
from .serializers import ClubSerializer
from .models import Club
# Create your views here.
class SingleClubView(generics.RetrieveAPIView):
    queryset = Club.objects.all()
    serializer_class = ClubSerializer