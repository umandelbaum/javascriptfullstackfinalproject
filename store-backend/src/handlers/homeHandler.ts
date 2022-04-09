import express, {Request, Response} from 'express';

const homeRoutes = express.Router();

homeRoutes.get('/', async (req: Request, res: Response):Promise<void> => {    
    res.json("success");
});

export default homeRoutes;