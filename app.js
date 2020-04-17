function Person(name, city, age) {
    this.name = name;
    this.city = city;
    this.age = age;
}
Person.prototype.sayHello = function() {
    alert(`Hey! My name is ${this.name}. I am ${this.age} years old and live in ${this.city}.`);
}

let person1 = {
    name: 'Simba',
    sayHello: function() {
        console.log(`Hello! My name is ${person1.name}.`);
    }
};

let person2 = {
    name: 'Nala',
    sayHello: function() {
        console.log(`Hello! My name is ${person2.name}.`);
    }
};

let person3 = {
    name: 'Rafiki',
    sayHello: function() {
        console.log(`Hello! My name is ${person3.name}`);
    }
};

let person4 = {
    name: 'Timon',
    sayHello: function() {
        console.log(`Hello! My name is ${person4.name}.`);
    }
};

let person5 = {
    name: 'Pumba',
    sayHello: function() {
        console.log(`Hello! My name is ${person5.name}`);
    }
};

person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();