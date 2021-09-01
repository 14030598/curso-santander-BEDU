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

```
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
```
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
```
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

```
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
```
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
```
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


## Sesión 10
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


## Sesión 11
* ### [Reto 1](sesion11-reto1)


```

```
***Nota:  ***

---

* ### [Reto 2](sesion11-reto2)

```

```
***Nota: ***

* ### [Reto 3](sesion11-reto3)

```

```
***Nota:  ***



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