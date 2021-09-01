# Retos por sesion
---

## Sesión 1
* ### [Reto 1](sesion1-reto1)


```

```
***Nota:  ***

---

* ### [Reto 2](sesion1-reto2)

```

```
***Nota: ***

* ### [Reto 3](sesion1-reto3)

```

```
***Nota:  ***

## Sesión 2
* ### [Reto 1](sesion2-reto1)


```

```
***Nota:  ***

---

* ### [Reto 2](sesion2-reto2)

```

```
***Nota: ***

* ### [Reto 3](sesion2-reto3)

```

```
***Nota:  ***



---
## Sesión 6
* ### [Reto 1](sesion6-reto1)
Crear un function constructor `Vec` el cual representa un vector en dos dimensiones. Recibe dos parámetros `x` y `y`, ambos valores numéricos que deben ser las propiedades del objeto.
Agregar los siguientes métodos al `**prototype**` de `Vec`:
1. `plus`: Recibe otro vector como parámetro y retorna un nuevo vector con la suma de ambos vectores.
1. `minus`: Recibe otro vector como parámetro y retorna un nuevo vector con la diferencia de ambos vectores.
1. `length`: Retorna la longitud del vector, es decir, la distancia del punto (x, y) desde el origen (0, 0).
> Para calcular la distancia desde (0, 0) hasta (x, y) se puede usar el teorema de Pitágoras: √(x2 + y2). En JavaScript existe el método `Math.sqrt` para calcular raíces cuadradas.

```javascript
    const Vec = function(x, y) {
        this.x = x;
        this.y = y;
        this.plus = vector => new Vec(this.x + vector.x, this.y + vector.y);
        this.minus = vector => new Vec(this.x - vector.x, this.y - vector.y);
        this.length = () => Math.sqrt(this.x**2 + this.y**2);
    };

    const vec1 = new Vec(1, 2);
    const vec2 = new Vec(2, 3);
    console.log(vec1.plus(vec2)); // Vec { x: 3, y: 5 }
    console.log(vec1.minus(vec2)); // Vec { x: -1, y: -1 }
    console.log(vec1.length()); // 2.23606797749979
```
***Nota: para este punto no se habia explicado `**prototype**` ***

---
* ### [Reto 2](sesion6-reto2)
Crear un function constructor `Group` el cual crea una lista (arreglo) vacía.
Agregar los siguientes métodos a Group:

1. `add`: Agrega un nuevo valor al grupo solo si no existe.
1. `has`: Retorna un booleano indicando si el valor es un miembro del grupo.
1. `from`: Método estático que recibe un arreglo y crea un grupo con todos los elementos de dicho arreglo.

> Los métodos estáticos son llamados sin instanciar su clase. Cuando se usan function constructors se pueden definir como método de la instancia sin necesidad de colocarlo en el prototype.

```javascript
    function Group() { //constructor, aqui no puedo agregar from porque sigue siendo el constructor
        this.lista = [];
    }

    Group.prototype = {
        add: function(valor){
            if(!this.has(valor))
                this.lista.push(valor);
        },
        has: function (valor) {
            if(this.lista.includes(valor))
                return true;
            return false;
        },
    };

    Group.from = function (arreglo) {
        let nuevo = new Group();
        nuevo.lista = [...arreglo];
        return nuevo;
    }

    const group = Group.from([1, 2, 3, 4, 5]);
    console.log(group); // Group { members: [ 1, 2, 3, 4, 5 ] }
    console.log(group.has(5)); // true
    console.log(group.has(10)); // false
    group.add(10);
    console.log(group.has(10)); // true
```
***Nota: Para que sea estatico debe estar fuera de `prototype`, no se hizo uso de la herencia que fue el tema***

* ### [Reto 3](sesion6-reto3)
Crear un function constructor `Triangle` con tres parámetros `a`, `b` y `c`. Cada uno representa un lado del triángulo.

Agregar el método `getPerimeter` al `prototype` de `Triangle`, el cual retorna el perímetro del triángulo.
```javascript
    const Triangle = function(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    Triangle.prototype.getPerimeter = function () {
        return this.a + this.b + this.c;
    }

    const triangle = new Triangle(1, 2, 3);
    console.log(triangle); // Triangle { a: 1, b: 2, c: 3 }
    console.log(triangle.getPerimeter()); // 6
```


## Sesión 7
* ### [Reto 1](sesion7-reto1)
Crear una función `flatten` que recibe un arreglo de arreglos y retorna un nuevo arreglo con todos los elementos del arreglo original.

```javascript
    function flatten(arrays) {
    // Code goes here...
    }

    const arrays = [[1, 2, 3], [4, 5], [6]];
    const array = flatten(arrays);

    console.log(array); // [1, 2, 3, 4, 5, 6]
```
***Nota:  ***

---

* ### [Reto 2](sesion7-reto2)
Crear una función `compact` que recibe un arreglo y retorna un nuevo arreglo sin incluir los valores que sean falsy.
```javascript
    function compact(array) {
    // Code goes here...
    }

    const array = [0, 1, false, 2, '', 3];
    const compactedArray = compact(array);

    console.log(compactedArray); // [1, 2, 3]
```
***Nota: ***

* ### [Reto 3](sesion7-reto3)
Crear una función de alto orden `loop` que será similar a un `for`.

Recibe tres argumentos: `start`, una función `test`, una función `update` y una función `body`.

El ciclo empieza en `start` y termina cuando `test` retorne `false`.
En cada iteración se ejecuta la función `body` dándole como argumento el valor actual de `start` actual.
Al final de cada ciclo se ejecuta la función `update`.

```javascript
    function loop(start, test, update, body) {
    // Code goes here...
    }

    const test = function(n) {
    return n > 0;
    }

    const update = function(n) {
    return n - 1;
    }

    loop(3, test, update, console.log);
    // 3
    // 2
    // 1
```
***Nota:  ***


## Sesión 8
* ### [Reto 1](sesion1-reto1)


```

```
***Nota:  ***

---

* ### [Reto 2](sesion1-reto2)

```

```
***Nota: ***

* ### [Reto 3](sesion1-reto3)

```

```
***Nota:  ***


## Sesión 9
* ### [Reto 1](sesion9-reto1)
Partir del siguiente documento HTML:
```html
    <html>
    <head>
        <meta charset="utf8" />
        <title>Reto 1: Reemplazar Imágenes</title>
    </head>
    <body>
        <h1>Images</h1>

        <img src="https://picsum.photos/200/300" alt="First Image"/>
        <img src="https://picsum.photos/200/300" alt="Second Image"/>
        <img src="https://picsum.photos/200/300" alt="Third Image"/>

        <script>
        // Code goes here
        </script>
    </body>
    </html>
```
Reemplazar todas las imágenes del documento (etiquetas <img/>) con el texto que contienen en el atributo alt.
> RESPUESTA: 
```javascript
    const reemplazar = () => {
        const imagenes = document.querySelectorAll('img');
        for (const imagen of imagenes) 
            imagen.parentNode.replaceChild(document.createTextNode(imagen.alt), imagen);
            //parentNode lleva al padre a reemplazar porque image no tiene hijos
    };
```
***Nota:  ***

---

* ### [Reto 2](sesion9-reto2)
Partir del siguiente documento HTML:
```html
    <html>
    <head>
        <meta charset="utf8" />
        <title>Reto 2: Crear una tabla</title>
    </head>
    <body>
        <h1>Mountains</h1>

        <div id="mountains"></div>

        <script>
        const data = [
            {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
            {name: "Everest", height: 8848, place: "Nepal"},
            {name: "Mount Fuji", height: 3776, place: "Japan"},
            {name: "Vaalserberg", height: 323, place: "Netherlands"},
            {name: "Denali", height: 6168, place: "United States"},
            {name: "Popocatepetl", height: 5465, place: "Mexico"},
            {name: "Mont Blanc", height: 4808, place: "Italy/France"}
        ];
        // Code goes here
        </script>
    </body>
    </html>
```
_La etiqueta `<table>` define la tabla, cada fila está compuesta por la etiqueta `<tr>`. Dentro de cada fila podemos crear celdas como headers `<th>` o celdas regulares `<td>`.

Crear una tabla a partir de la información proporcionada por data, un arreglo de objetos con las propiedades name, height y place. La tabla debe contener una columna por cada propiedad, y una fila por cada objeto. Adicionalmente debe contener una fila con headers `<th>` listando el nombre de cada columna, el cual corresponde a las propiedades del objeto.

Alinear hacia la derecha las celdas que contengan valores numéricos asignando a la propiedad style.textAlign el valor right._

***Nota: ***




---


## Sesión 10: Eventos en el DOM
* ### [Reto 1](../html/sesion10.html)


```javascript
<p>🎈</p>
const globo = document.querySelector('p');
        let aire = 20;

        const inflar = (event) => {
            if (event.key == "ArrowUp") {
                if(aire < 80){
                    aire += 20;
                    globo.style.fontSize = aire +"px";
                }
                if (aire == 80) {
                    globo.textContent = "💥";
                    window.removeEventListener("keydown", inflar);
                }
            }
            if (event.key == "ArrowDown") {
                if(aire > 20){
                    aire -= 20;
                    globo.style.fontSize = aire+"px";
                }
                
            }
        };

        window.addEventListener("keydown", inflar);
```




* ### [Reto 2](../html/sesion10.html)

```html
    <style>
        #modal {
          display: none;
          position: fixed;
          z-index: 1;
          padding-top: 100px;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          background-color: rgb(0, 0, 0);
          background-color: rgba(0, 0, 0, 0.9);
        }
      
        .modal-content {
          margin: auto;
          display: block;
          width: 80%;
          max-width: 700px;
        }
      
        .close {
          position: absolute;
          top: 15px;
          right: 35px;
          color: #f1f1f1;
          font-size: 40px;
          font-weight: bold;
          transition: 0.3s;
        }
      
        .close:hover,
        .close:focus {
          color: #bbb;
          text-decoration: none;
          cursor: pointer;
        }
    </style>

    <div class="ui right aligned container">
        <h1>Modal</h1>

        <button class="ui button">Open modal</button>

        <div id="modal">
            <span class="close">&times;</span>
            <img class="modal-content" id="modal-image"/>
        </div>
    </div>
    

    <script>
        const boton = document.querySelector('button');
        const modal = document.querySelector('#modal');
        const imagen = document.querySelector('#modal-image');
        const cerrar = document.querySelector('.close');

        boton.addEventListener('click', function (event) {
            imagen.src = "https://picsum.photos/300/200";
            modal.style.display = "block";
            
        });

        cerrar.addEventListener("click", function (event) {
            modal.style.display = "none";
        });
    </script>
```



* ### [Reto 3](../html/sesion10.html)

```html

```



## Sesión 11
* ### [Reto 1](sesion11-reto1)


```javascript
    function promiseAll(promises) {
        return new Promise((resolve, reject) => {
            `if (promises.length == 0) {
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
            }`
        });
    }
    
    function soon(value) {
        return new Promise(resolve => {
        setTimeout(() => resolve(value), 1000)
        });
    }
    


    // Test cases
    promiseAll([])
        .then(results => {
        console.log('Expected result []: ', results)
        })
    
    promiseAll([soon(1), soon(2), soon(3)])
        .then(results => {
        console.log('Expected result [1, 2, 3]: ', results)
        })
    
    promiseAll([soon(1), Promise.reject('X'), soon(3)])
        .then(results => {
        console.log('We should not get here');//no imprime esto
        })
        .catch(error => {
        console.log('Expected error X: ', error)
    })
```

---

* ### [Reto 2](sesion11-reto2)

```javascript
    async function wait() {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return 'Hello World';
    }

    function log(value) {
        `wait().then(string => { console.log(string);})`
    }

    log(); //value??
```

* ### [Reto 3](sesion11-reto3)

```javascript
    const processAction = (i, callback) => {
        setTimeout(function() {
            callback("Processed Action " + i);
        }, Math.random()*1000);
    }
    
    const triggerActions = (count) => {
        `const resultados=[];

        for (let i = 0; i <= count; i++) {
            resultados.push(new Promise(resolve => {
                processAction(i,resolve);
                })
            );
        }

        Promise.all(resultados).then((resultado) => resultado.forEach((resolve) => console.log(resolve)));
        console.log(resultados); //para ver que se estan haciendo las promesas`
    }

    `triggerActions(5);`
```





## Sesión 12
* ### [Reto 1](sesion1-reto1)


```

```
***Nota:  ***

---

* ### [Reto 2](sesion1-reto2)

```

```
***Nota: ***

* ### [Reto 3](sesion1-reto3)

```

```
***Nota:  ***