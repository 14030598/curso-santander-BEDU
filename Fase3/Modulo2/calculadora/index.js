var colores = require('./colores');
// Reto 1
console.log(colores.arcoiris('Reto 1'));
const suma = (a, b) => a + b;
console.log(colores.verde("El resultado es: "), suma(3, 9));

// Reto 2
console.log(colores.arcoiris('Reto 2'));
console.log(colores.verde('Va implicito en este color impreso'));

// Reto 3
console.log(colores.arcoiris('Reto 3'));
const random = require('./random')
const arreglo = [];

for (let i = 0; i < 100; i++) {
    arreglo[i] = random(-1000, 1000, 10)
}

console.log(colores.verde("Sin ordenar: "), arreglo);

console.log(colores.verde("Ordenado: "), arreglo.sort((a, b) => a - b));