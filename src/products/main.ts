import { addProduct, calcStock, products } from './product.service'

addProduct({ name: 'Socks', createdAt: new Date(), stock: 10 })
addProduct({ name: 'Shoes', createdAt: new Date(), stock: 5, sizes: 's' })
addProduct({ name: 'T-shirt', createdAt: new Date(), stock: 15, sizes: 'm' })

console.log(products)

