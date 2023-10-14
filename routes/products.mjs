import express from 'express';
import db from '../db/conn.mjs';
import { ObjectId } from 'mongodb';

const router = express.Router();

router.get('/', async (req, res) => {
    let collection = await db.collection('products').find({}).toArray();
    res.send(collection);
});

router.post('/', async (req, res) => {
    const result = await db.collection('products').insertOne(req.body);
    res.send(result);
    if (!result) {
        res.status(500).send('Insert not successful');
        return;
    }
    res.send(result).status(200);
});

router.get("/:id", async (req, res) => {
    const result = await db.collection("products").findOne({ _id: ObjectId(req.params.id) });
    if (!result) {
        res.status(404).send("Product not found");
        return;
    }
    res.send(result).status(200);
 });

export default router;