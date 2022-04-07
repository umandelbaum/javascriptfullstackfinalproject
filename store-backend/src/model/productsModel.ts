import client from '../database';

export type Product = {
	id: number;
	name: string;
	price: number;
	url: string;
	description: string;  
}

export class ProductStore {
	
	async index(): Promise<Product[]> {
		try{
			const conn = await client.connect();
			const sql = 'SELECT * from products';
			const result = await conn.query(sql);
			conn.release();
			return result.rows;
		} catch (err) {
			throw new Error(`Database error: ${err}`);
		};
	};
}