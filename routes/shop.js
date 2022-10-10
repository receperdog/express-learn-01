const express = require('express')

const route = express.Router();
// if I use app.get instead of app.use I have to consider unknown url error sth like 404 page error (Unhandled routes).
route.get('/', (req, res, next) => {

    res.send('<h1>HELLO FROM MAIN PAGE</h1>')
});

module.exports = route;