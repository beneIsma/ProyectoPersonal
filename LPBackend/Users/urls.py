from django.urls import path
from Users.views import HomeView, LoginView, RegisterView, CiudadesView

urlpatterns = [
    path("",HomeView.as_view()),
    path("api/login/", LoginView.as_view()),
    path("api/registro/", RegisterView.as_view()),
    path("api/ciudades/", CiudadesView.as_view())
]