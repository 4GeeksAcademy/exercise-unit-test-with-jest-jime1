
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro *oneEuroIs.USD;
    // Retornamos el valor en dólares
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar) {
    let euro=valueInDollar/oneEuroIs.USD 
    let valueInYen = euro *oneEuroIs.JPY
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a dólares
    let euro=valueInYen/oneEuroIs.JPY
    let valueInPound = euro *oneEuroIs.GBP
    // Retornamos el valor en dólares
    return valueInPound;
}
// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum ,fromEuroToDollar,fromDollarToYen,fromYenToPound };