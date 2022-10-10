const express = require('express');
const app = express();
const bodyParser = require('body-parser')

//This middleware provide the body parsing to our application
app.use(bodyParser.urlencoded({extended : false}));

app.use('/add-product',(req, res, next) => {
    res.send(
        '<form action="/product" method="POST"> <input type="text" name="title"></input> <button type="submit">Click to Add Product</button> </form>'
    )
});

app.use('/product', (req, res, next) => {
    //We will see the sended post value thanks to body-parser
    console.log(req.body);
    //routing with redirect method.
    res.redirect('/')

});

app.use('/', (req, res, next) => {

    res.send('<h1>HELLO FROM MAIN PAGE</h1>')
});

// listenin port
app.listen(3000);