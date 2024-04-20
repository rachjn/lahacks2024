from django.urls import path
from . import views

urlpatterns = [
    path('<int:pk>', views.SingleClubView.as_view()),
    path('myclubs/add/<int:pk>', views.UpdateUserClubView.as_view()),
    path('myclubs/', views.UserClubsView.as_view())
]