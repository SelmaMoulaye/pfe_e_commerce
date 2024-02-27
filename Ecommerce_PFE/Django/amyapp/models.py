from django.db import models

# Create your models here.

class Produits(models.Model):
    
   # nom = models.DecimalField(max_digits=10, decimal_places=2)
   # nom = models.TextField()    # Exemple de valeur pour max_length
    
    categorie = models.CharField(max_length=225)
    date_ajouter= models.DateField()
    description = models.CharField(max_length=225)
    #id = models.AutoField(primary_key=True)
    id = models.CharField(primary_key=True, max_length=200)
    nom= models.CharField(max_length=500)
    prix= models.DecimalField(max_digits=10, decimal_places=2)
    stock_disponible =models.IntegerField()
   
   

    # Ajoutez d'autres champs selon vos besoins
    class Meta:
        app_label = 'amyapp'

        
