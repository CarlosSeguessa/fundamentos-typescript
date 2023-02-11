(() => {
  let productPrice = 100
  productPrice = 12
  console.log('productPrice: ', productPrice)

  let customerAge: number = 22
  // customerAge = customerAge = '1' // 281
  customerAge = customerAge = 1 // 29

  console.log('Customer age:', customerAge)

  let productInStock: number = 2
  console.log('product in stock:', productInStock)

  if (productInStock > 10) {
    console.log('is greater')
  } else {
    console.log('is lesser')
  }

  let discount = parseInt('123')
  console.log(discount)
})()
