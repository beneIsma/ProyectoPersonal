from django.urls import path
from Productos.views import ProductosView, SeccionesPorCategoriaView, CategoriasView

urlpatterns = [
    path('productos/',ProductosView.as_view()),
    path('secciones/', SeccionesPorCategoriaView.as_view()),
    path("categorias/", CategoriasView.as_view())
]