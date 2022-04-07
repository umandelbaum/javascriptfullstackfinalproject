import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/productModel';
import { ProductService } from '../services/product.service';
import { orderedProduct } from '../model/orderedProduct';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {

  id : Number = 0;
  product : Product = {
    id: -1,
    name: '',
    price: 0,
    url: '',
    description: ''
  }
  quantity : string = '1';

  constructor(private router: Router, private productService:ProductService,
              private orderService:OrderService) { }

  ngOnInit(): void {
    this.id = parseInt(this.router.url.split('/')[2]);
    this.productService.getProducts().subscribe((res):void => {      
      const matchingProducts = res.filter(p => p.id == this.id);
      if (matchingProducts.length == 0) { //If there is no match, route back to index
        this.router.navigateByUrl('/');
      } else {
        this.product=matchingProducts[0];
      }
    });
  }

  addOrder():void{
    const update:orderedProduct = {
      id: this.product.id,
      quantity: parseInt(this.quantity)
    }    
    this.orderService.addToOrder(update);
    this.quantity = '1';
    alert('Product added');
  }

}
