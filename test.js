const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("3,5 euros should be 3.745 dollars", function () {
    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); 
})

test("1 dollar should be 146.26168224299064 yen", function () {
    expect(fromDollarToYen(1)).toBe(146.26168224299064); 
})

test("1 yen should be 0.0055591054313099035 pound", function () {
    expect(fromYenToPound(1)).toBe(0.0055591054313099035); 
})