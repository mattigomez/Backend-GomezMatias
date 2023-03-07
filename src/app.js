const express = require('express')
const ProductManager = require ('./productmanager')

const productManager = new ProductManager ()

const port = 3000
const app = express()

app.use(express.urlencoded({ extended: true }))

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})



app.get ('/products' , async (req,res) => {
    
    const products = await productManager.loadProducts()
    
    res.send ({productos: products})
})

app.get('/products/:pid', async (req, res) => {
  const { pid } = req.params;
  const products = await productManager.loadProducts();
  const product = products.find(busqueda => busqueda.id === pid);
  console.log(product);
  
  res.send({ producto: product });  
})