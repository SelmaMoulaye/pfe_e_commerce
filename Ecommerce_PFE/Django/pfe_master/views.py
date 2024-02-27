from django.shortcuts import render
from django.http import HttpResponse

from django.urls import path
from . import views  # Assurez-vous que le point indique que vous importez depuis le même répertoire
from django.contrib import admin
from django.urls import path
import pyrebase
# Initialize Firebase (move credentials to environment variables)
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
# Initialize Pyrebase
firebase = pyrebase.initialize_app(config)
auth = firebase.auth()
database = firebase.database()

def index(request):
    produit_categorie = database.child('Produit').child('categorie').get().val()
    produit_name = database.child('Produit').child('nom').get().val()
    produit_prix = database.child('Produit').child('prix').get().val()
    discription = database.child('Produit').child('description').get().val()

    context = {
        'produit_categorie': produit_categorie,
        'produit_name': produit_name,
        'produit_prix': produit_prix,
        'discription': discription,
    }

    return render(request, 'index.html', context)


