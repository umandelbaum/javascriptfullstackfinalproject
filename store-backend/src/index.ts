import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productsRoutes from './handlers/productsHandler';
import homeRoutes from './handlers/homeHandler';

dotenv.config();

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());
app.use('/products', productsRoutes);
app.use('/', homeRoutes);

app.listen(port, async (): Promise<void> => {
    
    console.log(`Server started at Port ${port}/`);     
});

export default app;
