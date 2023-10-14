import express from 'express';
import cors from 'cors';
const app = express();
import router from './routes/products.mjs';

app.use(cors());
app.use(express.json());
app.use('/products', router);

app.listen(3000, () => console.log('Server started on port 3000'));