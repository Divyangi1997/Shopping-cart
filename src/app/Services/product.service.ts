import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { productsUrl } from 'src/app/config/api';

//const apiUrl = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  // products: Product[] = [
  //   new Product(1,'Product 1','This is the product 1 description. The product is really kool!', 100,'../../assets/bag1.jpg'),
  //   new Product(2,'Product 2','This is the product 2 description. The product is really kool!', 200,'../../assets/bag2.jpg'),
  //   new Product(3,'Product 3','This is the product 3 description. The product is really kool!', 300,'../../assets/bag7.jpg'),
  //   new Product(4,'Product 4','This is the product 4 description. The product is really kool!', 400,'../../assets/bag4.jpg'),
  //   new Product(5,'Product 5','This is the product 5 description. The product is really kool!', 500,'../../assets/bag5.jpg'),
  //   new Product(6,'Product 6','This is the product 6 description. The product is really kool!', 600,'../../assets/bag6.jpg')
  // ]

  constructor(private http: HttpClient) { }

  // getProducts(): Product[] 
  // {
  //   //TODO: populate products from an API and return an Observable
  //   return this.products
  // }

  getProducts() : Observable<Product[]>{
    //return this.http.get<Product[]>(apiUrl);
    return this.http.get<Product[]>(productsUrl);
  }
}
