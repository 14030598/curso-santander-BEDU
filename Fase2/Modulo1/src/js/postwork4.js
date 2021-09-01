// function deepEqual(a, b) {
//     let bandera=false;
//     if(a === b){// compara si son iguales y si typeof son iguales(1,'1')
//         bandera=true; // return true;
//     }else if(typeof a === 'object' && typeof b === 'object'){
//         if(Object.keys(a).length == Object.keys(b).length){//objetos del mismo tamaño
//             for (let i = 0; i < Object.keys(a).length; i++) {
//                 if(Object.keys(a)[i] === Object.keys(b)[i] && Object.values(a)[i] === Object.values(b)[i]){//todo igual keys y value
//                     bandera = true;
//                 }
//                 else{
//                     bandera = false;// return false;
//                     break;
//                 }
//             }
//         }else{// objetos de diferente tamaño
//             bandera = false; // return false;
//         }
//     }else{//no son iguales
//         bandera = false; // return false;
//     }
//     return bandera;
//  };

// const john = {
//     firstName: 'John',
//     lastName: 'Doe'
// }
// console.log('Test 1:', deepEqual(1, 1)) // true
// console.log('Test 2:', deepEqual(1, '1')) // false
// console.log('Test 3:', deepEqual(john, john)) // true
// console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
// console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // false




// function chunk(array, size) {//7
//     let newdata=[],temp=[];
//     const tamano=array.length/size; // da el número de arreglos en que subdivide
//     let pos=0; //ayuda para recorrer el array
//     for(let i = 0; i < tamano; i++){ //cantidad de arreglos anidados
//       for(let j = 0; j < array.length/tamano; j++){ // cantidad de elementos de cada arreglo
//         if(array[pos] != undefined) //evita el undefined
//           temp[j] = array[pos];
//         pos++;
//       }
//       newdata[i] = temp;
//       temp=[]
//     }
//     return newdata
// };

// function chunk(array, size) {//7
//     let newdata=[],temp=[];
//     const tamano=array.length/size; // da el número de arreglos en que subdivide
//     let pos=0; //ayuda para recorrer el array
//     for(let i = 0; i < tamano; i++){ //cantidad de arreglos anidados
//       for(let j = 0; j < array.length/tamano; j++){ // cantidad de elementos de cada arreglo
//         if(array[pos] != undefined) //evita el undefined
//           temp[j] = array[pos];
//         pos++;
//       }
//       newdata[i] = temp;
//       temp=[]
//     }
//     return newdata
// };
// const data = [1, 2, 3, 4, 5, 6, 7, 8]
// console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
// console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
// console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]
// console.log('Test 3:', chunk(data, 8))



function chunk(array, size) {
    let X=[];
    let S = size;
    for (let n = 0; n < array.length; n+=size) {
        X.push(array.slice(n,S));
        S += size;
    }
    return X;
};
const data = [1, 2, 3, 4, 5, 6, 7, 8]
console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]
console.log('Test 3:', chunk(data, 8))


function frequency(cadena) {
    const frecuencia={};
    const array = cadena.split("").sort();
    array.forEach(item => {
        frecuencia[item] = frecuencia[item] >= 1 ? frecuencia[item]+1 : 1;
    });
    return frecuencia;
}

console.log('Test 1: ', frequency('cccbbbaaa')); //{a: 3, b: 3, c: 3}
console.log('Test 2: ', frequency('www.bedu.org')); //{.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
console.log('Test 3: ', frequency('john.doe@domain.com')); //{.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}
console.log('Test 3: ', frequency('Hola a Todos esta es una prueba (Luis Manuel)   3 espacios juntoS voy a tronar este codigo!"##$$%&/()= '));
