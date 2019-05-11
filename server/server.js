const express = require('express');
const app = express();
const PORT =  process.env.PORT || 5000;
const productRouter = require('./routes/product.router')

app.use('/products', productRouter);


app.listen(PORT, () =>{
    console.log(`LISTENIN ON ${PORT}`);
    
})