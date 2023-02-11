(() => {
  type UserID = string | number
  let userId: UserID


  // literal types
  type Sizes = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'
  let shirtSize: Sizes
  shirtSize = 'xs'
  shirtSize = 's'
  shirtSize = 'm'
  // shirtSize = 'L' // Error


  const greeting = (userId: UserID, size: Sizes) => {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toUpperCase()} size: ${size}`)

    }
  }
  greeting('carlos', 'xl')
})()



