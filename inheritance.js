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