// const sum = (a,b) => {
//     return a + b
// }
// console.log (sum (7,3))
// module.exports = { sum };

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
const fromDollarToYen = (dolares) => {
    return (dolares/oneEuroIs.USD)*oneEuroIs.JPY; 
} 
console.log (fromDollarToYen (1.07))

const fromEuroToDollar = (euros) => {
    return (euros*oneEuroIs.USD) 
} 
console.log (fromEuroToDollar (2))

// const fromEuroToDollar = function (valueInEuro) {
//     let valueInDollar = valueInEuro*1.07;
//     return valueInDollar;
// }
const fromYenToPound = (yen) => {
return (yen/oneEuroIs.JPY)*oneEuroIs.GBP; 
} 
console.log (fromYenToPound (156.5))

module.exports = { fromEuroToDollar }
