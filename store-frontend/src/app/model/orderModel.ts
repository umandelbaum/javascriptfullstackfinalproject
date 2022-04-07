export class Order {
	id: number;
	complete: boolean;
	 //intended to represent the associating table with the productID, quantity tuple
	orderedProducts: Map<number, number>;
	    
	constructor(){
		this.id = 1;
		this.complete = false;
		this.orderedProducts = new Map<number, number>();
	}
}