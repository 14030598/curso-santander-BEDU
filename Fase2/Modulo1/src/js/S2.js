//PLUGIN CODE RUNER


//SESION 2
function sesion1() {
    //#################           EJEMPLO 1         #####################
    const time = 13;
    let greeting;
    if (time < 12) {
        greeting = "Good morning";
    } else if (time < 20) {
        greeting = "Good afternoon";
    } else if (time >= 20) {
        greeting = "Good evening";
    }
    console.log(greeting);
    
    //#################           EJEMPLO 2         #####################
    const day = 2;
    let text;
    switch (day) {
        case 0:
            text = "Sunday";
            break;
        case 1:
            text = "Monday";
            break;
        case 2:
            text = "Tuesday";
            break;
        case 3:
            text = "Wednesday";
            break;
        case 4:
            text = "Thursday";
            break;
        case 5:
            text = "Friday";
            break;
        case 6:
            text = "Saturday";
            break;
        default:
            text = "Error";
    }
    console.log(text); // Tuesday
    
    //#################           EJEMPLO 3         #####################
    for(let i = 0; i<=10; i++){
        console.log("Hello World");
    }
    


}


//#################           RETO 1         #####################
function saludo(hora) {
    let saludo;
    if (hora >= 0 && hora < 12) {
        saludo = "Good morning";
    } else if (hora >= 12 && hora < 20) {
        saludo = "Good afternoon";
    } else if (hora >= 20 && hora <= 24) {
        saludo = "Good evening";
    }else{
        saludo = "una hora que no existe en el día";
    }

    console.log(saludo);
}

//#################           RETO 2         #####################
function pares(ciclos) {
    for (let i = 0; i <= ciclos; i++) {
        if (i % 2 == 0)
            console.log(i);
    }
}
// pares(100);

// function numeros(ciclos, agrupacion) {
//     for (let i = 0; i <= ciclos; i++) {
//         if (agrupacion == 'par'){
//             if (i % 2 == 0)
//                 console.log(i);
//         }else if(agrupacion == 'impar'){
//             if(i % 2 != 0)
//             console.log(i);
//         }
            
        
//     }
// }
// numeros(100,'impar');

//#################           RETO 3         #####################
function primos(n) {
    let cont=0;
    for (let i = 0; i < n; i++) {
        cont=0;
        for (let j = 1; j <= i; j++) {
            if(i % j == 0){
                cont++;
            }
        }
        if(cont==2)
            console.log('primo: '+i);
    }
}




// primos(100);



/*Crea un script en donde dado el diámetro de una rueda y su grosor (en número) y
a través de condicionales if realice las siguientes operaciones:
- Si el diámetro es superior a 1.4 debe mostrarse el mensaje “La rueda es para un vehículo grande”.

- Si es menor o igual a 1.4 pero mayor que 0.8 debe mostrarse el mensaje “La rueda es para un vehículo mediano”.
- Si no se cumplen ninguna de las condiciones anteriores debe mostrarse por pantalla el mensaje “La rueda es para un vehículo pequeño”.

- Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, 
ó si el diámetro es menor o igual a 1.4 pero mayor que 0.8,
  con un grosor inferior a 0.25, deberá mostrarse el mensaje “El grosor para esta rueda es inferior al recomendado”*/


function reto(diametro,grosor) {
    if(diametro > 1.4){
        console.log('La rueda es para un vehículo grande”');
    }else if (diametro <= 1.4 && diametro > 0.8){
        console.log("La rueda es para un vehículo mediano");
    }else if ((diametro > 1.4 && grosor < 0.4) || ((diametro <= 1.4 && diametro >0.8) && grosor < 0.25)) {
        console.log('El grosor para esta rueda es inferior al recomendado');  
    }else{
        console.log('La rueda es para un vehículo pequeño');
    }
}
