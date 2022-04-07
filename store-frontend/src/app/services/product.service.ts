import { Injectable } from '@angular/core';
import { Product } from '../model/productModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(private http:HttpClient) { }

  getProducts () : Observable<Product[]> {    
    return this.http.get<Product[]>('http://simpleapi-env.eba-qzap3tpk.us-east-1.elasticbeanstalk.com/products');
  }
}
