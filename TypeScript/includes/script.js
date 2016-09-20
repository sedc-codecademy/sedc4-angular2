import { show, Vehicle } from './func-utils';
var astra = new Vehicle("Opel", "Astra");
document.write(show(astra));
var golf = {
    make: "Volkswagen",
    model: "Golf",
    generation: 7
};
document.write(show(golf));
