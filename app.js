const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const adminRoutes = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js');
//This middleware provide the body parsing to our application
app.use(bodyParser.urlencoded({extended : false}));
//Set the Folder structure for maintaining purpose of app.
app.use('/admin',adminRoutes);

app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page NOT found </h1>');
});

// listenin port
app.listen(3000);