function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        if (promises.length == 0) {
            resolve(promises);
        }else{
            const resultados = []; //retornar arreglo
            let count = 0;
            promises.forEach(promesa => {
                promesa.then( (resultado) => {
                    resultados.push(resultado);
                    count++;
                    if (count == 3)
                        resolve(resultados);
                }).catch(reject);
            });
        }
    });
}
  
function soon(value) {
    return new Promise(resolve => {
      setTimeout(() => resolve(value), 1000)
    });
}
  


// Test cases
// promiseAll([])
//     .then(results => {
//       console.log('Expected result []: ', results)
//     })
  
// promiseAll([soon(1), soon(2), soon(3)])
//     .then(results => {
//       console.log('Expected result [1, 2, 3]: ', results)
//     })
  
// promiseAll([soon(1), Promise.reject('X'), soon(3)])
//     .then(results => {
//       console.log('We should not get here');//no imprime esto
//     })
//     .catch(error => {
//       console.log('Expected error X: ', error)
// })





async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return 'Hello World';
}

function log(value) {
    wait().then(string => { console.log(string);})
}

// log(); //value??





// Don't alter this function
const processAction = (i, callback) => {
    setTimeout(function() {
        callback("Processed Action " + i);
    }, Math.random()*1000);
}
  
const triggerActions = (count) => {
    const resultados=[];

    for (let i = 0; i <= count; i++) {
        resultados.push(new Promise(resolve => {
            processAction(i,resolve);
            })
        );
    }

    Promise.all(resultados).then((resultado) => resultado.forEach((resolve) => console.log(resolve)));
    console.log(resultados); //para ver que se estan haciendo las promesas
}

triggerActions(5);
  