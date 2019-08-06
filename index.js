const express = require('express');
const bodyParser = require('body-parser');
const fs = require ('fs');
const app = express();

app.use('/static', express.static('static'));
app.use(bodyParser.urlencoded());
app.set('view engine', 'ejs');


app.get('', (req, res) => {
    res.render('index');
});

app.get('/secondpage', (req, res) => {
    res.render('secondpage'); 
});


app.listen(8000, () => {
    console.log('Servidor inicializado na 8000')
});