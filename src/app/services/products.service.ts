import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http
      .get<any>('http://localhost:4000/products');
  }

  getProductDeatils(productId): Observable<any> {
    return this.http
      .get<any>(`http://localhost:4000/products/${productId}`);
  }

  searchProduct(minPrice, maxPrice, rating, productStr?): Observable<any> {
    return this.http.get<any>(`http://localhost:4000/products?search=${productStr}&minPrice=${minPrice}&maxPrice=${maxPrice}&rating=${rating}`);
  }
}
