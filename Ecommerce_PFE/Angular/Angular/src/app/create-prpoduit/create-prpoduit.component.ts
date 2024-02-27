import { Component } from '@angular/core';
import { Produit } from '../model/produit';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-create-prpoduit',
  templateUrl: './create-prpoduit.component.html',
  styleUrls: ['./create-prpoduit.component.css'],
  providers: [ProduitService]
})
export class CreatePrpoduitComponent {

  id: string = '';
  nom: string = '';
  categorie: string = '';
  description: string = '';
  prix: number=0;
  stock_disponible :string ='';
  date_ajouter :Date =new Date();

  produitObj: Produit = {
    id: '',
    nom: '',
    categorie: '',
    description:'',
    prix:0,
    stock_disponible: '',
    date_ajouter:new Date()
  };

  constructor(private produitService: ProduitService) { }
  resetForm() {

    this.id = '';
    this.nom = '';
    this.categorie = '';
    this.description = '';
    this.prix;
    this.stock_disponible = '';
    this.date_ajouter;
  }
  createProduct() {

    this.produitObj.id = '';
    this.produitObj.nom= this.nom;
    this.produitObj.categorie = this.categorie;
    this.produitObj.description = this.description;
    this.produitObj.prix = 0;
    this.produitObj.stock_disponible = this.stock_disponible;
    this.produitObj.date_ajouter= this.date_ajouter;

    this.produitService.createProduct(this.produitObj).subscribe(
      
      (res) => {
        console.log('Produit créé avec succès :', res);
        // Réinitialiser les données du produit après la création réussie
       /*this.id='';
        this.nom = '';
        this.categorie = '';
        this.description='',
        this.prix = 0;
        this.stock_disponible,
        this.date_ajouter*/
      },
      (error) => {
        console.error('Erreur lors de la création du produit :', error);
      }
    );
    this.resetForm()
  }
}
