import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../model/produit';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-edit-prpoduit',
  templateUrl: './edit-prpoduit.component.html',
  styleUrl: './edit-prpoduit.component.css',
  providers: [ProduitService]
})
export class EditPrpoduitComponent implements OnInit {

  produitedit: FormGroup;
  produitRef :any;

  constructor(private produitService: ProduitService,private formBuilder: FormBuilder, public router:Router ,private act : ActivatedRoute) {
    this.produitedit= this.formBuilder.group({
      nom:[''],
      categorie:[''],
       description:[''],
       prix:[''],
       stock_disponible: [''],
       date_ajouter:[''],
   });
 } 

  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');
   this.produitService.getUser(id).subscribe(res =>{
    this.produitRef= res;
    console.log(this.produitRef); // Log the received data
    this.produitedit = this.formBuilder.group({
      nom:[this.produitRef.nom],
      categorie:[this.produitRef.categorie],
      description:[this.produitRef.description],
      prix:[this.produitRef.prix],
      stock_disponible:[this.produitRef.stock_disponible],
      date_ajouter:[this.produitRef.date_ajouter],
      
     } ) })
     console.log(this.produitRef);
   }
   onSubmit(){
    const id= this.act.snapshot.paramMap.get('id');
    this.produitService.updateUser(id,this.produitedit.value);
    this.router.navigate(['getproduits']);
   }

}

