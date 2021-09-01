// CLASES
const Rectangle = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    area() {
        return this.height * this.width;
    }
};
        
console.log(new Rectangle(5, 8).area());// expected output: 40



const Foo = class {
    constructor() {}
    bar() {
      return 'Hello World!';
    }
};

const instance = new Foo();
instance.bar();  // "Hello World!"
Foo.name;        // "Foo"