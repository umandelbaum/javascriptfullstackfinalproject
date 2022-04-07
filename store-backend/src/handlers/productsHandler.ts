import express, {Request, Response} from 'express';
import { ProductStore } from '../model/productsModel';

const store = new ProductStore();
const productsRoutes = express.Router();

productsRoutes.get('/', async (req: Request, res: Response):Promise<void> => {    
    try {
        const products = await store.index();
        res.json(products);
    } catch (err) {
        res.status(404).json(`${err}`);
    };  
});

export default productsRoutes;