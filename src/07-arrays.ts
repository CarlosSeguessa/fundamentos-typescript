(() => {
  let prices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'hola', true]
  // prices.push('asdasd')
  // prices.push(true)
  // prices.push({})
  prices.push(1212121212)

  let products = ['hola', true]
  products.push(12)

  let mixed: (number | string | boolean)[] = ['hola', true]
  mixed.push(12)
})()
