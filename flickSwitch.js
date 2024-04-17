function flickSwitch(arr){
    let newArr = true;
  return arr.map(item => item === 'flick' ? newArr = !newArr :newArr)
  }
  console.log(flickSwitch(['a','flick','c','d']))