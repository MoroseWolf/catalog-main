import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Product } from '../models.ts/products.model';
import { Observable } from 'rxjs'
import firebase from 'firebase/app';
import 'firebase/database';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  private appUrl = environment.appUrl;
  private apiUrl = 'products';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };

  constructor(private http: HttpClient) { }

  createProduct(product: Product): any {
    //return firebase.database().ref(`products/${product.name}`).set(product);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`http://localhost:8081/products`);
  }

  deleteProduct(product: Product): any {
    //return firebase.database().ref(`products/${product.name}`).remove();
  }

}
