let express = require('express');
let router = express.Router();
let products = require('../modules/products')

//console.log(products)

router.get('/', (req, res) => {
    res.send(products);
})

router.get('/:id', (req, res) => {
    let prodId = Number(req.params.id);
    //filter all products for the one with the matching id
    const result = products.filter(i => i.product.id === prodId);
    if (result.length === 0) {
    res.sendStatus(500);
    }
    else {
    res.send(result);
}
})


module.exports = router;