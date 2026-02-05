from django.urls import path
from Users.views import HomeView


urlpatterns = [
    path("",HomeView.as_view())
]