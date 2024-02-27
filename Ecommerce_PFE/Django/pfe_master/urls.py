
from django.contrib import admin
from rest_framework.routers import DefaultRouter
from django.urls import path, include
from amyapp.serializers import MonModeleSerializer
router = DefaultRouter()

router.register(r'produits', MonModeleSerializer, basename='Produit')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('amyapp.urls')),
    # Ajoutez d'autres inclusions d'applications ici...
   # urllib3(r'^', include(router.urls)),
   # re_path(r'^', include('amyapp.urls')),
  #  url(r'^', include('amyapp.urls'))

   # urlsafe_b64decode(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]