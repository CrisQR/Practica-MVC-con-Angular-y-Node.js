import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Products'

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  listProducts() {
    return this.http.get(`${this.API_URI}/products`);
  }

  getProduct(id: number) {
    return this.http.get(`${this.API_URI}/products/${id}`)
  }
  
  createProduct(product: Product) {
    return this.http.post(`${this.API_URI}/products`, product);
  }

  updateProduct(id: number | number, updatedProduct: Product) {
    return this.http.put(`${this.API_URI}/products/${id}`, updatedProduct);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.API_URI}/products/${id}`);
  }
}
