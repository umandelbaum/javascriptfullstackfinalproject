import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { orderedProduct } from '../model/orderedProduct';
import { Product } from '../model/productModel';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {
  @Input() product:Product = new Product();
  quantity: string = '1';  
  @Output() addToOrder: EventEmitter<orderedProduct> = new EventEmitter;

  constructor() {  }

  ngOnInit(): void { }

  addOrder():void{
    const update:orderedProduct = {
      id: this.product.id,
      quantity: parseInt(this.quantity)
    }    
    this.addToOrder.emit(update);
    this.quantity = '1';
  }

}
