const fs = require ('fs')

class ProductManager {

    file = __dirname + '/Products.json' 

    

async loadProducts () {
    if (fs.existsSync(this.file)) {
        const data = await fs.promises.readFile(this.file, 'utf-8')
        const products = JSON.parse(data)
        return products 

    } return 'El archivo no existe'


}

/* async loadById (){
    
} */
}

module.exports = ProductManager 

