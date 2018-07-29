const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');
require('dotenv').config();

const app = express();

//let controller = require('./controller')

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
}).catch(err=> {
    console.log('there was an error connecting to db:',err)
})

app.use(bodyParser.json());

app.get('/api/product', (req,res) => {
    let db = req.app.get('db');
    db.getInvintory().then(response => {
        res.send(response)
    })
})

app.get('/api/product', controller.getInvintory)
app.post('/api/product', controller.addInvintory)
app.put('/api/product/:id', controller.updateInvintory)
app.delete('/api/product/:id', controller.deleteInvintory)

const port = 4343
app.listen(port, () => {
    console.log('Listening on port:', port)
})