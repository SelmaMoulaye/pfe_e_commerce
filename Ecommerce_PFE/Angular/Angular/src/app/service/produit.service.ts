import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../model/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  
  baseurl = "http://127.0.0.1:8000";
  baseUrl = "http://127.0.0.1:8000";
  baseUrlget="http://127.0.0.1:8000/api/get_produit/";

  constructor(private http: HttpClient) { }

  getAllProduit(): Observable<any[]> {
    return this.http.get<any[]>(this.baseurl + '/api/produit/');
  }

  getAll(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  
  createProduct(product: Produit): Observable<Produit> {
    return this.http.post<Produit>(`${this.baseUrl}/api/create_product/`, product);
  }
// Function to delete data through Django backend
 deleteProduit(key: any) {
  return this.http.delete(`http://127.0.0.1:8000/api/delete/${key}`);
  
}

/*getProduit(id: any): Observable<any> {
  return this.http.get<any>(`${this.baseUrlget}${id}/`);
}

updateProduit(id: any, newData: any): Observable<any> {
  return this.http.put<any>(`${this.baseUrl}${id}/`, { new_data: newData });
}*/


getUser(id:any): Observable<Produit> {
  return this.http.get<Produit>(`${this.baseUrlget}${id}/`);
}
updateUser(id:any, produit:Produit): Observable<Produit> {
  return this.http.put<Produit>(`${this.baseUrlget}${id}/`, produit);
}
}



