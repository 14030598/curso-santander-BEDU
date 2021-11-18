console.log('Id del proceso:', process.pid)
process.stdin.setRawMode(true);
process.stdin.resume();
console.log('press any key');
process.stdin.on('data', process.exit.bind(process, 0));

// args
console.log(process.argv);

//en consola
// node file.js arg1 arg2 arg3


process.exit(0); //salir
process.exit(1); // diferente de cero significa que sale con error