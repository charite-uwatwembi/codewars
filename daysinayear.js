const yearDays = (year) => {
    if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        return 366
    } else {
        return 365
    }
}
console.log(yearDays(0))
console.log(yearDays(-64))
console.log(yearDays(2016))
console.log(yearDays(1974))
console.log(yearDays(-10))
console.log(yearDays(666))