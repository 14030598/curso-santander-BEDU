const numero1 = parseInt(process.argv[2]);
const numero2 = parseInt(process.argv[3]);

if (numero1 === undefined || numero2 === undefined) {
    console.log("No fueron definidos uno o mas argumentos");
    console.error("Saliendo");
    process.exit(0);
}
if (isNaN(numero1) || isNaN(numero2)) {
    console.log("Los argumentos definidos no son numeros");
    console.error("Saliendo");
    process.exit(4);
}

process.env['NOMBRE'] = 'Luis Manuel Tapia';
console.log('Codigo escrito por **' + process.env.NOMBRE + '**');
console.log(numero1 + numero2);
