    function ejemplo1() {
        const ageJohn = calculateAge(1995);
        console.log(ageJohn); // 25
        yearsUntilRetirement(1995, 'John Doe');     // John Doe retires in 40 years.
    }
    function calculateAge(birthYear) {
        const age = 2020 - birthYear;
        return age;
    }
    function yearsUntilRetirement(year, name) {
        const age = calculateAge(year);
        const retirement = 65 - age;
        console.log(`${name} retires in ${retirement} years.`);
    }

// ************************** RETO 1 **************************
/*Crear una función power que recibe dos argumentos base y exponent. La función debe retornar el resultado de elevar base a la potencia exponent.*/
    function power(base, exponent) {
        let potencia=1;
        for (let i = 1; i <= exponent; i++)
            potencia *= base;
        return  `${ base } ^ ${ exponent } = ${ potencia }`;
    }
    console.log(power(3,3));
    console.log(power(2,8));


// ************************** EJEMPLO 2 **************************
const square = function(number) {
    return number * number;
} 
const squareOfFour = square(4);
console.log('CUADRADO: ',squareOfFour); // 16

const factorial = function fac(num) {
    return num < 2 ? 1 : num * fac(num - 1)
}
console.log('FACTORIAL: ',factorial(5)); // 120


// ************************** EJEMPLO 2 **************************
(function logname() {
    const name = "John Doe";
    console.log(name);
})();
(function() {
    const name = "John Doe";
    console.log(name);
})();
(function(lastName) {
    const firstName = "John";
    console.log(`${firstName} ${lastName}`);
})('Doe');


// ************************** RETO 2 **************************
const mayor = (number1, number2) => {
    if(number1 > number2)
        return number1;
    return number2;
};
console.log('El mayor: ',mayor(6,5));



// ************************** RETO 3 **************************
function fibonacciSequence(limit) {
    const X=[1,1];
    for(let n=2; n < limit; n++)
        X[n] = X[n-1] + X[n-2];

    return X;
}
  
// fibonacciSequence(1); // 1
// fibonacciSequence(2); // 1, 1
// fibonacciSequence(5); // 1, 1, 2, 3, 5