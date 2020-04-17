class Person {
    constructor(name, state, age) {
        this.name = name;
        this.state = state;
        this.age = age;
    }
    sayHello() {
        alert(`Hello my name is ${this.name}. I am ${this.age} years old and live in ${this.state}.`);
    }
}

let p1 = new Person('Ana', 'Arkansas', 29);
let p2 = new Person('Liz', 'Missouri', 30);
let p3 = new Person('Lauren', 'Iowa', 27);
let p4 = new Person('Faith', 'Tennessee', 29);
let p5 = new Person('Kimberlee', 'Missouri', 30);

p1.sayHello();
p2.sayHello();
p3.sayHello();
p4.sayHello();
p5.sayHello();