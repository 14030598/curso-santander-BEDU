const fs = require('fs')
const path = require('path')

const filepath = path.join(__dirname, 'input.txt');

const read = fs.readFileSync(filepath, 'utf-8');
const caracteres = read.length;

let espacios = 0, lineas = 1;

for (let index = 0; index < read.length; index++) {
    if (read.charAt(index) == ' ')
        espacios++;
    if (read.charAt(index) == '\n')
        lineas++;
}



console.log('Numero de caracteres', caracteres);
console.log('Numero de espacios', espacios);
console.log('Numero de lineas', lineas);
