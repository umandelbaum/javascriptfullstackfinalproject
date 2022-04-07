import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { orderedProduct } from '../model/orderedProduct';
import { Product } from '../model/productModel';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() product:Product = new Product();
  @Input() quantity: number | undefined = 0;  
  @Output() setOrderQuantity: EventEmitter<orderedProduct> = new EventEmitter;

  constructor() {  }

  ngOnInit(): void { }

  changeOrder():void{    
    const update:orderedProduct = {
      id: this.product.id,
      quantity: this.quantity as number
    }        
    this.setOrderQuantity.emit(update);    
    if (this.quantity as number <= 0) {    
      alert("Item removed");
    }
  }

  removeOrder():void{
    const update:orderedProduct = {
      id: this.product.id,
      quantity: 0
    };
    this.setOrderQuantity.emit(update);
    alert("Item removed");
  }
}
