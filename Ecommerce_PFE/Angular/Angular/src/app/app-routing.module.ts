import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePrpoduitComponent } from './create-prpoduit/create-prpoduit.component';
import { EditPrpoduitComponent } from './edit-prpoduit/edit-prpoduit.component';
import { ProduitListComponent } from './produit-list/produit-list.component';
import { ProduitService } from './service/produit.service';

const routes: Routes = [
  { path: 'getproduits', component: ProduitListComponent},
  { path: 'create-product', component:CreatePrpoduitComponent },
  { path: 'delete-produit/:id', component :ProduitListComponent},
  
  { path: 'update-produit/:id', component: EditPrpoduitComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
