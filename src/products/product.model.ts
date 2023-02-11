export type Sizes = 's' | 'm' | 'l' | 'xl' | 'xxl'
export type Product = {
  name: string,
  createdAt: Date,
  stock: number,
  sizes?: Sizes,
}
