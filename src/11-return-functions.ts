(() => {
  const calcTotal = (prices: number[]) => {
    let total = 0
    prices.forEach(price => {
      total += price
    })
    return total
  }

  const rta = calcTotal([10, 20, 30, 40, 50])
  console.log(rta)
})()
