//######################################## EJEMPLO 1
const john = {
    name: 'John',
    birthYear: 1990,
    job: 'Developer'
}
//MEJOR FORMA
const Persona = function(name, birthYear, job) {
    this.name = name;
    this.birthYear = birthYear;
    this.job = job;
}

const johnPersona = new Persona('John',1990,'Developer');
const otraPersona1 = new Persona('otra1',1991,'Sabe');
const otraPersona2 = new Persona('otra2',1992,'Diseñador');
const otraPersona3 = new Persona('otra3',1993,'Ing');

console.log(johnPersona);
console.log(otraPersona1);
console.log(otraPersona2);
console.log(otraPersona3);

console.log(typeof johnPersona);
console.log(johnPersona instanceof Persona);


const Personas = [
    new Persona('John',1990,'Developer'),
    new Persona('otra1',1991,'Sabe'),
    new Persona('otra2',1992,'Diseñador'),
    new Persona('otra3',1993,'Ing'),
];
console.log(Personas);
Personas.push(new Persona('otra4',1993,'Ing'));
console.log(Personas);









//################################### Ejemplo 2

const Persona2 = function(name) {
    this.name = name;
}

const Developer = function(name, skills, yearsOfExperience) {
    Persona2.call(this, name);
    this.skills = skills;
    this.yearsOfExperience = yearsOfExperience;
}
const john = new Developer('John', 'JavaScript', 10);
console.log( john );




//################################### Ejemplo 3

const Persona3 = function (name, birthYear, job) {
    this.name = name;
    this.school = 'Bedu';
    this.birthYear = birthYear;
    this.job = job;
}

Persona3.prototype.calculateAge = function () {
    const today = new Date();
    const year = today.getFullYear();
    console.log( year - this.birthYear ); // this es para saber que pertenece al padre
}

const john = new Persona3('John', 1990, 'Developer');
const mark = new Persona3('Mark', 1985, 'Teacher');
const jane = new Persona3('Jane', 1975, 'Designer');

console.log(john);
console.log(mark);
console.log(jane);
john.calculateAge();
mark.calculateAge();
jane.calculateAge();

console.log(john);
console.log(mark);
console.log(jane);