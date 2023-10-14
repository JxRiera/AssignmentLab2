import express from 'express';
import cors from 'cors';
const app = express();
import router from './routes/products.mjs';

app.use(cors());
app.use(express.json());

//router
app.use('/api/products', router);

//get for the main page
app.get('/', (req, res) => {
    res.send({ message: 'Welcome to DressStore application' });
});


//Listen port
app.listen(3000, () => console.log('Server started on port 3000'));