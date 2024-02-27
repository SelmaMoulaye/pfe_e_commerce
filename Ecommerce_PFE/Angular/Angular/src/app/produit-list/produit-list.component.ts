import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrl: './produit-list.component.css',
  providers: [ProduitService]
})
export class ProduitListComponent implements OnInit {
  produits: any[] = [];
 
  key: string = '';

  constructor(private route: ActivatedRoute, private produitservice: ProduitService) {
    this.route.params.subscribe(params => {
      this.key = params['key'];
    });
  }

  ngOnInit(): void {this.getProducts();}

  
  getProducts(): void {
     this.produitservice.getAllProduit
     ().subscribe(data => { this.produits = data; });}
   
   /*getAllProduit() {
    console.log('get dd produits');
    this.api.getAll().subscribe(res => {
      this.produits= res.map(e => {
        const data = e.payload.doc.data() as Produit;
        const id = e.payload.doc.id;
        return { ...data, id }; // Ne définissez 'id' qu'une seule fois
      });
    });
  }*/

  deleteProduct(id:string) {
    if (window.confirm('Are you sure you want to delete'+' ?')) {
      //this.produitservice.deleteProdui(id);
    this.produitservice.deleteProduit(id).subscribe(
      response => {
        console.log(response);
      },);
    }
  }

  deleteProduit(id:any) {
    if (window.confirm('Are you sure you want to delete'+' ?')) {
      //this.produitservice.deleteProdui(id);
    }
  }

  
}