class Vehicle {
    constructor(type, manufacturer, wheels) {
        this.type = type;
        this.manufacturer = manufacturer;
        this.wheels = wheels;
    }
    aboutVehicle() {
        console.log(`This vehicle is a ${this.type} that was made by ${this.manufacturer} and has ${this.wheels} wheels.`);
    }
}

class Truck extends Vehicle {
    constructor(type, manufacturer, wheels, doors, bed) {
        super(type, manufacturer, wheels);
        this.doors = doors;
        this.bed = bed;
    }
    aboutVehicle() {
        if (this.bed === true) {
            console.log(`This vehicle is a ${this.type} that was made by ${this.manufacturer}. It has ${this.wheels} wheels, ${this.doors} doors and a bed.`);
        } else {
            console.log(`This vehicle is a ${this.type} that was made by ${this.manufacturer}. It has ${this.wheels} wheels, ${this.doors} doors and does not have a bed.`);
        }
    }
}

class Sedan extends Vehicle {
    constructor(type, manufacturer, wheels, size, mpg) {
        super(type, manufacturer, wheels);
        this.size = size;
        this.mpg = mpg;
    }
    aboutVehicle() {
        console.log(`This vehicle is a ${this.type} that was made by ${this.manufacturer}. It is ${this.size}, has ${this.wheels} wheels and gets ${this.mpg} mpg.`);        
    }
}

class Motorcycle extends Vehicle {
    constructor(type, manufacturer, wheels, doors, steering) {
        super(type, manufacturer, wheels);
        this.doors = doors;
        this.steering = steering;
    }
    aboutVehicle() {
        console.log(`This vehicle is a ${this.type} that was made by ${this.manufacturer}. It has ${this.wheels} wheels, ${this.doors} doors and uses ${this.steering} to steer.`);
    }
}

let v1 = new Truck('truck', 'Ford', 4, 4, true);
let v2 = new Sedan('sedan', 'Lexus', 4, 'medium', 22);
let v3 = new Motorcycle('motorcycle', 'Honda', 2, 0, 'handlebars');

v1.aboutVehicle();
v2.aboutVehicle();
v3.aboutVehicle();