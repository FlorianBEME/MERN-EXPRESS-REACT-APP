const express = require('express');
const path = require('path');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.use(express.static('client/build'));

app.get('/api', (req, res) => {
    res.send({msg: "hello"})
})
app.get('/*', (_, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.listen(5000, () => {
    console.log(`server run on ${PORT}`)
})

