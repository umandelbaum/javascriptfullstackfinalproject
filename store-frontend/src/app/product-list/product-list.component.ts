import { Component, OnInit } from '@angular/core';
import { Product } from '../model/productModel';
import { ProductService } from '../services/product.service';
import { OrderService } from '../services/order.service';
import { orderedProduct } from '../model/orderedProduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService:ProductService, 
              private orderService:OrderService) { }
  

  ngOnInit(): void {
    this.productService.getProducts().subscribe((res):void => {      
      this.products = res;
    });
  }

  addToOrder(update:orderedProduct) {
    this.orderService.addToOrder(update);
    alert("Added to cart: ID: " + update.id + " Quantity: " + update.quantity);
  }

}
