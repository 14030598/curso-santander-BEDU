function ejemplo1() {
    // if(true) {
    //     var foo = "John Doe"
    //     console.log(foo) // "John Doe"
    // }
      
    // console.log(foo) // "John Doe"

    
    // var numbers = [1, 2, 3, 4, 5]
    // var doubles = []
    
    // for(var i = 0; i < numbers.length; i++) {
    // doubles.push(numbers[i] * 2)
    // }
    
    // console.log(numbers) // [1, 2, 3, 4, 5]
    // console.log(doubles) // [2, 4, 6, 8, 10]
    // console.log(i) // 5
    


    if(true) {
        const foo = "John Doe"
      
        console.log(foo) // "John Doe"
    }
    
    console.log(foo) // Uncaught ReferenceError: foo is not defined

    

    // const numbers = [1, 2, 3, 4, 5]
    // const doubles = []
    
    // for(let i = 0; i < numbers.length; i++) {
    //     doubles.push(numbers[i] * 2)
    // }
    
    // console.log(numbers) // [1, 2, 3, 4, 5]
    // console.log(doubles) // [2, 4, 6, 8, 10]
    // console.log(i) // Uncaught ReferenceError: i is not defined
      
}
function ejemplo2() {
    //dshha
}

function ejemplo3() {
    const john = {
        firstName: 'John',
        lastName: 'Doe',
        birthYear: 1990,
        calculateAge: function() {
          const today = new Date()
          const year = today.getFullYear()
          this.age = year - this.birthYear
        }
    }
    john.calculateAge();
    console.log(john);

    const john1 = {
        firstName: 'John',
        lastName: 'Doe',
        birthYear: 1990,
        calculateAge: () => {
          const today = new Date()
          const year = today.getFullYear()
          this.age = year - this.birthYear
        }
    }
    john1.calculateAge();
    console.log(john1);
      
}


// ************************** RETO 1 **************************
var singers = [
    { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
    { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
    { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
    { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
];
  
function pluck(list, propertyName) {
    const lista = [];
    for(let key of list)
        lista.push(key[propertyName]);
    return lista;
}
const pluck2 = (list, propertyName) => list.map(key => key[propertyName]);

// console.log( pluck2(singers, 'name') ); // ["Steven Tyler", "Karen Carpenter", "Kurt Cobain", "Chris Cornell"]
// console.log( pluck(singers, 'band') ); // ["Aerosmith", "The Carpenters", "Nirvana", "Soundgarden"]
// console.log( pluck(singers, 'born') ); // [1948, 1950, 1967, 1964]



// ************************** RETO 2 **************************
const createPhoneNumber = (data) => {
    if(data.length != 10)
        return 'no es un numero telefonico';
    console.log(`(${data.slice(0,3).join("")}) ${data.slice(3,6).join('')}-${data.slice(6,10).join('')}`)
 };
//createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // "(123) 456-7890"






// ************************** RETO 3 **************************
const findMissingNumbers = (array) => {                     //consideraciones revisar vacio, el 0 o si solo numero
    let X=[];
    array.sort((a,b) => a-b);
    for (let i = 0; i <= array[array.length-1]; i++) {
        if(!array.includes(i) && i != 0)
            X.push(i);
    }
    console.log(X); //return X;
};
//findMissingNumbers([2, 1, 9, 5, 7, 3, 10]); // [4, 6, 8]



const array1 = ['Hello'];
const mutable = array => {
    let nuevo=[...array];
    nuevo.push('World');
    return nuevo;
}
console.log(`Mi array1 al inicio: ${array1}`);
console.log(`Mi array resultante: ${mutable(array1)}`);
console.log(`Mi array1 después de la función: ${array1}`);