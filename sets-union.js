function union(s1, s2){
    //...
    
    for(const el of s1){
      if(!(s2.has(el))){
        s2.add(el)
      }
    }
    return s2
    
  }
const A = new Set([1, 2, 3, 4]);
    const B = new Set([2, 3]);
console.log(union(A, B))


    
  