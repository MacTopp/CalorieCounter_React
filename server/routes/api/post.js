const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

router.get('/', async (req, res) =>{
    const posts = await loadPostCollection();
    res.send(await posts.find({}).toArray());
});

router.post('/', async (req, res) =>{
    const posts = await loadPostCollection();
    await posts.insertOne({
        createdAt: new Date(),
        consumed: req.body.consumed,
        burned: req.body.burned

    });
    res.status(201).send();
});

router.delete('/:id', async (req, res) => {
    const posts = await loadPostCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
});

async function loadPostCollection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://Mac:Beckham14!@cluster0-w6y5b.mongodb.net/test?retryWrites=true',
    {useNewUrlParser: true});
    return client.db('cluster0').collection('Calorie_App');
}
module.exports = router;