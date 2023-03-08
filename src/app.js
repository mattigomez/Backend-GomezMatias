const express = require('express')
const ProductManager = require ('./productmanager')

const productManager = new ProductManager ()

const port = 3000
const app = express()

app.use(express.urlencoded({ extended: true }))

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})

app.get('/products', async (req, res) => {
  const products = await productManager.loadProducts();
  const limit = req.query.limit;

  if (limit) {
    const sliceProducts = products.slice(0, parseInt(limit));
    return res.send({ productos: sliceProducts });
  }else { 
    res.send ({productos: products})}

});

app.get('/products/:pid', async (req, res) => {
  const { pid } = req.params;
  try {
    
    const products = await productManager.loadProducts();
    const product = products.find(busqueda => busqueda.id === Number(pid));
    res.send({ productos: product });  
    return 
  } catch (error) {
    console.log(error);
  }
  
})