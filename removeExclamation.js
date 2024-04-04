const remove = s =>{
    return s.replace(/[!]/g, '')
}
console.log(remove("Hello! World!"));