const express  = require('express');
const router = express.Router();

router.get('/add-product',(req, res, next) => {
    res.send(
        '<form action="/admin/product" method="POST"> <input type="text" name="title"></input> <button type="submit">Click to Add Product</button> </form>'
    )
});
 
router.post('/product', (req, res, next) => {
    //We will see the sended post value thanks to body-parser
    console.log(req.body);
    //routing with redirect method.
    res.redirect('/')

});

module.exports = router;