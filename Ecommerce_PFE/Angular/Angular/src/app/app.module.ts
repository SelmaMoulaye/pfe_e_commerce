import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

import { ProduitListComponent } from './produit-list/produit-list.component';
import { provideRouter, RouterModule } from '@angular/router';
import { CreatePrpoduitComponent } from './create-prpoduit/create-prpoduit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditPrpoduitComponent } from './edit-prpoduit/edit-prpoduit.component';
@NgModule({
  declarations: [
    AppComponent,
    ProduitListComponent,
    CreatePrpoduitComponent,
    EditPrpoduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule, // Add RouterModule here
    FormsModule,
    ReactiveFormsModule
  ],  
  providers: [provideHttpClient(withFetch()) , provideClientHydration()],
  
  bootstrap: [AppComponent]
})
export class AppModule { }



