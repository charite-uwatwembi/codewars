//The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

// 2.56 --> 74

function convertToDecimal(num) {
    // 1 km = 100,000 cm
    // 1 hour = 3600 seconds
    // Convert km per hour to cm per second
    return Math.floor(num * 100000 / 3600)
}

console.log(convertToDecimal(1.08))