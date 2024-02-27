from collections import OrderedDict
import json
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from flask import Response
from requests import get
from rest_framework.decorators import api_view
import pyrebase
from .models import Produits
from .serializers import MonModeleSerializer
from rest_framework.views import APIView
from django.views.decorators.csrf import csrf_exempt

config = {
     'apiKey': "AIzaSyBj_igi4p34adf9TCz4cbKgOfwGj9cue2s",
      'authDomain': "projetfinmaster-6fc29.firebaseapp.com",
      'databaseURL':'https://projetfinmaster-6fc29-default-rtdb.firebaseio.com/',
      'projectId': "projetfinmaster-6fc29",
      'storageBucket': "projetfinmaster-6fc29.appspot.com",
      'messagingSenderId': "668117584806",
      'appId': "1:668117584806:web:395429b354040745bf9d67",
      'measurementId': "G-8HJRMS4QN7"
}
# Initialize Pyrebase
firebase = pyrebase.initialize_app(config)
auth = firebase.auth()
database = firebase.database()

@api_view(['GET'])
def firebase_data(request):
    produits_data = database.child("Produits").get().val()
    #keys = produits_data.keys()
    
    #print(key)
    produits = []
    for key, produit_info in produits_data.items(): 
                    
            produit = Produits(             
            #id=produit_id, 
            id=key,
            categorie=produit_info.get('categorie'),
            date_ajouter=produit_info.get('date_ajouter'),
            description=produit_info.get('description'),
            nom=produit_info.get('nom'),
            prix=produit_info.get('prix'),
            stock_disponible=produit_info.get('stock_disponible'),       
        )
            produits.append(produit)
    serializer = MonModeleSerializer(produits, many=True)
    return JsonResponse(serializer.data, safe=False)
    '''produits_data = database.child("Produits").get().val()
    keys = produits_data.keys()

    produits = []
    for key in keys:
       
        produit_info = produits_data[key]
        produit = Produits(
        ide=key,
        categorie=produit_info.get('categorie'),
        date_ajouter=produit_info.get('date_ajouter'),
        description=produit_info.get('description'),
        nom=produit_info.get('nom'),
        prix=produit_info.get('prix'),
        stock_disponible=produit_info.get('stock_disponible')
    )
    produits.append(produit)

    serializer = MonModeleSerializer(produits, many=True)
    return JsonResponse(serializer.data, safe=False)'''


@csrf_exempt
@api_view(['POST'])
def create_product(request):
    if request.method == 'POST':
        data = request.data 
       
        database.child("Produits").push(data)
        return JsonResponse(data, status=201)
    
    ''' produit = Produits.objects.create(
            categorie=data['categorie'],
            date_ajouter=data['date_ajouter'],
            nom=data['nom'],
            description=data['description'],
            prix=data['prix'],
            stock_disponible=data['stock_disponible']
            # Autres champs de données
        )  ''' 

def delete_data_in_firebase(key):
    ref = database.reference('data')
    ref.child(key).delete()

@csrf_exempt
@api_view(['DELETE'])
def delete_product(request, key):
    if request.method == 'DELETE':
        delete_data_in_firebase(key)
        return JsonResponse({'message': 'Data deleted successfully'})



@api_view(['GET'])
def get_product(request, id):
    produits = []
    produit_info = database.child("Produits").child(id).get().val()  
    #for produit_id, produit_info in produits_data.items(): 
    print(produit_info)
    #for produit_info in produits_data.items(): 
    produit = Produits(             
        categorie=produit_info.get('categorie'),
        
        date_ajouter=produit_info.get('date_ajouter'),
        description=produit_info.get('description'),
        nom=produit_info.get('nom'),
        prix=produit_info.get('prix'),
        stock_disponible=produit_info.get('stock_disponible'), )    
     #print(produit)
    produits.append(produit)
    serializer = MonModeleSerializer(produits,many=True)
    return JsonResponse(serializer.data, safe=False)

'''@api_view(['GET'])
def get_product(request, product_id):
    produits = []
    produit_info = database.child("Produits").child(product_id).get().val()
    date_ajouter = produit_info.items().get('date_ajouter')
    if produit_info:
        produit = Produits(             
        categorie=produit_info.items().get('categorie'),
        date_ajouter=produit_info.items().get('date_ajouter'),
        description=produit_info.get('description'),
        nom=produit_info.get('nom'),
        prix=produit_info.get('prix'),
        stock_disponible=produit_info.get('stock_disponible'),       
    )
        
        produits.append(produit)
        serializer = MonModeleSerializer(produits,many=True)   
        return JsonResponse(produit, status=200)
    else:
           return JsonResponse({'message': 'Produit non trouvé'}, status=404)''' 

@csrf_exempt
@api_view(['PUT'])
def update_Product(request,product_id,):
    if request.method == 'PUT':
        data = request.data
        updated_data = {
            'categorie': data.get('categorie'),
            'date_ajouter': data.get('date_ajouter'),
            'description': data.get('description'),         
            'nom': data.get('nom'),
            'prix':data.get('prix'),
            'stock_disponible': data.get('stock_disponible'), 
            # Ajoutez d'autres champs à mettre à jour si nécessaire
        }
        database.child("Produit").child(product_id).update(updated_data)
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)



'''from django.shortcuts import render
from firebase_admin import db

def firebase_data_view(request):
    # Récupérer les données de Firebase
    firebase_data = db.reference('Produits').get().val()

    # Extraire les identifiants générés par Firebase
    ids_generes = [key for key in firebase_data.keys()]
    print(ids_generes)
    # Passer les identifiants à un modèle Django pour affichage
    return render(request, {'ids_generes': ids_generes})'''




''' produit = {
            'id': product_id,
            'categorie': produit_info.get('categorie'),
            'date_ajouter': produit_info.get('date_ajouter'),
            'description': produit_info.get('description'),
            'nom': produit_info.get('nom'),
            'prix': produit_info.get('prix'),
            'stock_disponible': produit_info.get('stock_disponible')
        }'''