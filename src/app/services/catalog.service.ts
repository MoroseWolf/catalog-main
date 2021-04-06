import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Product } from '../models.ts/products.model';
import { Observable } from 'rxjs'
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

  createProduct(product: Product): Observable<any> {
    return this.http.post(`${this.appUrl + this.apiUrl}`, product, this.httpOptions);  
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.appUrl + this.apiUrl}`);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.appUrl + this.apiUrl}/${id}`, {responseType: 'text'});
  }

}
