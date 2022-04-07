import { Component, OnInit } from '@angular/core';
import { Order } from '../model/orderModel';
import { Product } from '../model/productModel';
import { OrderService } from '../services/order.service';
import { ProductService } from '../services/product.service';
import { UserService } from '../services/user.service';
import { User } from '../model/userModel';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  productsInOrder: Product[] = [];
  order : Order = new Order();
  total : number = 0;
  user : User = new User();

  constructor(private productService:ProductService, 
              private orderService:OrderService,
              private userService:UserService) { }

  ngOnInit(): void {
    this.order = this.orderService.getOrder();
    this.user = this.userService.getUser();
    const keys = Array.from(this.order.orderedProducts.keys());    
    this.productService.getProducts().subscribe((res):void => {      
      const allProducts = res;
      this.productsInOrder = allProducts.filter(p => keys.includes(p.id));
      this.calculateTotal();
    });       
  }

  calculateTotal():void{
    this.total = 0;    
    for (let index = 0; index < this.productsInOrder.length; index++) {
      const element = this.productsInOrder[index];
      const quantity = this.order.orderedProducts.get(element.id) as number;      
      this.total = this.total + (element.price*quantity);
    }    
  }

}
