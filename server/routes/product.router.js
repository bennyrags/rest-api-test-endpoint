let express = require('express');
let router = express.Router();
let products = require('../modules/products')

router.get('/', (req,res) =>{
    res.send(products);
})



router.get('/:id', (req,res)=>{
    let id = req.params.id;

    res.send(`hi, ${id}!`);

})


module.exports = router;