/*Ejemplo 1*/
function ejemplo1() {
    const numbers = [1, 3, 4, 7, 2, 1, 9, 0]
    const doubled = []

    for(let i = 0; i < numbers.length; i++) {
        doubled.push(numbers[i] * 2);
    }

    console.log(numbers); // [1, 3, 4, 7, 2, 1, 9, 0]
    console.log(doubled);  // [2, 6, 8, 14, 4, 2, 18, 0]
}

function reto1() {
    const numbers = [5, 3, 4, 7, 2, 1, 9, 7, 7];
    let promedio=0;
    for (const number of numbers) {
        promedio += number;
    }
    console.log(promedio/numbers.length);
}

function ejemplo2() {
    const car = {
        brand: 'Nissan',
        model: 'Versa',
        year: 2020
    }
      
    const pairs = []
    for(const property in car) {
        pairs.push( [property, car[property]] )
    }
    
    console.log(pairs)
    // [['brand', 'Nissan'], ['model', 'Versa'], ['year', 2020]]
      
}

function reto2() {
    const car = [['brand', 'Nissan'], ['model', 'Versa'], ['year', 2020]]
    const automovil = {}

    for (const key of car) {
        automovil[key[0]] = key[1];
    }
    console.log(automovil);
}

function ejemplo3() {
    const person = {
    firstName: 'John',
    lastName: 'Doe'
    };
    
    const { firstName: name,  country: ctry = 'Unknown'} = person;
    
    console.log(name, ctry); // John Unknown
}



function reto3() {
    const person = {
        firstName: 'John',
        lastName: 'Doe',
        links: {
            web: {
                blog: 'https://johndoe.com'
            }, 
            social: {
                facebook: 'https://facebook.com/john.doe',
                instagram: 'https://instagram.com/john.doe'
            }
        }
    };
    
    const { 
        facebook: fb,  
        instagram: ig 
    } = person.links.social;
    console.log(fb,'\n',ig);
}

//Unir los array y sumar los numeros primos en el array
function retofinal() {

    const array1 = [1, 2, 3, 4, 5];
    const array2 = [6, 7, 8, 9, 10];
    const calificaciones = {
        array3:[11, 12, 13, 14, 15]
    };

    const array = [...array1, ...array2, ...calificaciones.array3]
    console.log(array);
    resultado=0;
    array.forEach(item => {
        if (primo(item)) {
            resultado += item;
            console.log('primo: ',item);
        }
    });

    console.log('Suma: ',resultado);
    
}

function primo(numero) {
    if(numero<=1){
        return false;
    }else{
        for (let i = 2; i <= numero-1; i++)
            if(numero%i == 0)
                return false;
        
        return true;
    }
}