const request = require('request');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.render('pages/main')
})

app.get('/clothes', (req, res) => {
    res.render("pages/clothes")
})

app.get('/clothesDetail', (req, res) => {
    res.render('pages/clothesDetail')
});

app.get('/shoes', (req, res) => {
    res.render('pages/shoes')
})

app.get('/shoesDetail', (req, res) => {
    res.render('pages/shoesDetail')
});

app.get('/accessories', (req, res) => {
    res.render('pages/accessories')
})

app.get('/accessoriesDetail', (req, res) => {
    res.render('pages/accessoriesDetail')
})

app.get('/cart', (req, res) => {
    res.render('pages/cart')
})

app.get('/quotes', (req, res) => {
    fs.readFile('quotes.db', function(err, buf) {
        var qarr = JSON.parse(buf);
        var random = Math.floor(Math.random() * (qarr.length - 1));
        res.setHeader('Access-Control-Allow-Origin', '*');
        // Request methods you wish to allow
        res.setHeader(
            'Access-Control-Allow-Methods',
            'GET, POST, OPTIONS, PUT, PATCH, DELETE'
        );

        // Request headers you wish to allow
        res.setHeader(
            'Access-Control-Allow-Headers',
            'X-Requested-With,content-type'
        );

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.send(qarr[random]);
    });
})

app.listen(port, () => {
    console.log(`Port is: ${port}`)
});