function inter(s1, s2){
    // ...
    let s3 = new Set([])
    
   
    for (const element of s1){
        if(s2.has(element)){
            s3.add(element)
        }
    }
    return s3
  }
  const A = new Set([1, 2, 3, 4]);
    const B = new Set([2, 3]);
  console.log(inter(A, B))