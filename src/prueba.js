const ProductManager = require('./ProductManager')

async function main() {
  const productManager = new ProductManager()
  const products = await productManager.loadProducts()
  return console.log(products) 
}

console.log(main());    
