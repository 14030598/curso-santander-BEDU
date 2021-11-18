const fs = require('fs')
const path = require('path')

const filepath = path.join(__dirname, 'data.txt');
fs.writeFileSync(filepath, 'Hola es mi primer archivo');
const content = fs.readFileSync(filepath).toString();

console.log(content);
fs.appendFileSync(filepath, '\nEsta es una nueva linea');

const modificado = fs.readFileSync(filepath, 'utf-8')

console.log(modificado);