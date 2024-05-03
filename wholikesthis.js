function likes(...names){
    if(names.length === 0){
        return ` No one likes your post`
    }else if(names.length === 1){
        return `${names[0]} likes your post`
    }else if(names.length === 2){
        return `${names[0]} and ${names[1]} liked your post`
    }else if(names.length === 3){
        return `${names[0]},${names[1]} and ${names[2]} liked your post` 
    }else {
        return `${names[0]}, ${names[1]} and ${names.length -2} more liked your post`
    }
    return names
}
console.log(likes())
console.log(likes('peter'))
console.log(likes('peter','david'))
console.log(likes('max','john','mark'))
console.log(likes('max','john','mark','jacob','peter','eric'))