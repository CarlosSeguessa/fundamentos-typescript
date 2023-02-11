(() => {
  type Sizes = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'
  const createProductToJson = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes,
  ) => {
    return {
      title,
      createdAt,
      stock,
      size,
    }
  }

  const product = createProductToJson('shirt', new Date(), 10, 'xl')
  console.log(product)
  console.log(product.title)
  console.log(product.stock)
})()
