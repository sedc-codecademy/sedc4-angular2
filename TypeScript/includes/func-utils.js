export var add = (x, y) => x + y;
var mul = (x, y) => x * y;
export class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}
export class Truck {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}
export function show(vehicle) {
    return `${vehicle.make} ${vehicle.model}`;
}
// var astra = new Vehicle("Opel","Astra");
// show(astra);
// var golf = {
//     make: "Volkswagen",
//     model: "Golf",
//     generation: 7
// }
// show(golf); 
