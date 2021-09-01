//######################################## RETO 1
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











//######################################## RETO 2
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

Group.from = function (arreglo) { //Para que sea estatico debe estar fuera de prototype
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


















//######################################## RETO 3
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