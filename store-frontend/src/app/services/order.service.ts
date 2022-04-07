import { Injectable } from '@angular/core';
import { Order } from '../model/orderModel';
import { orderedProduct } from '../model/orderedProduct';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  order: Order = new Order();

  constructor() { }

  getOrder():Order{
    return this.order;
  }

  updateOrder(update: orderedProduct):Order{
    if (update.quantity <= 0) { //First check for removal
      if (this.order.orderedProducts.has(update.id)) { //And only remove if it exists
        this.order.orderedProducts.delete(update.id);       
      }
    } else { //If not remove, then just update
      this.order.orderedProducts.set(update.id,update.quantity);
    }
    return this.order;
  }

  addToOrder(update: orderedProduct):Order{
    if (this.order.orderedProducts.has(update.id)) {
      const newQuantity = this.order.orderedProducts.get(update.id) as number 
                          + update.quantity;
      this.order.orderedProducts.set(update.id, newQuantity);
    } else {
      this.order.orderedProducts.set(update.id,update.quantity);      
    }
    return this.order;
  }

  completeOrder():Order{
    this.order.complete = true;
    return this.order;
  }

}
