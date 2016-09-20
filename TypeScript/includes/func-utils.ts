export var add = (x:number,  y:number) => x + y;

var mul = (x:number,  y:number) => x * y;

export interface IVehicle {
    make : string;
    model: string;
}

export class Vehicle {
    constructor (public make: string, public model: string){

    }
}

export class Truck implements IVehicle {
    constructor (public make: string, public model: string){

    }
}

export function show(vehicle : IVehicle){
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