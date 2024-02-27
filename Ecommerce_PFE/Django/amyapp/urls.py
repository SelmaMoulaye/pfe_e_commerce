from pfe_master import urls
from . import views 
from django.contrib import admin
from django.urls import path

urlpatterns = [
    #path('admin/', admin.site.urls), 
    path('api/produit/', views.firebase_data),
 
   
    path('api/create_product/', views.create_product),
    path('api/create_product/id', views.delete_product),
   
    path('api/update_produit/pk', views.update_Product),
    #path('api/get_produit/id', views.get_product),
   # path('api/get_produit/product_id/', views.get_product)
     path('api/get_produit/<str:id>/', views.get_product)

    


]