function usdCny(usd) {
    const conversionRate = 6.75
    let cny = usd * conversionRate
     let result = cny.toFixed(2) 
      return(`${result} Chinese Yuan`)
  }

  console.log(usdCny(10))