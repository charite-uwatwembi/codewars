function abbrevName(name){

    // code away
    // let arrName = name.split(' ')

    
    //     return arrName[0][0].toUpperCase() + '.' + arrName[1][0].toUpperCase()
    
    

        return name.split(' ').map(i => i[0].toUpperCase()).join('.')
    
    


}
console.log(abbrevName("charite uwatwembi"))