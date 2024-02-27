from rest_framework import serializers
from .models import  Produits

class MonModeleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produits
        fields = ['categorie','date_ajouter','description','id','nom','prix','stock_disponible','date_ajouter'] 
      
        
        


