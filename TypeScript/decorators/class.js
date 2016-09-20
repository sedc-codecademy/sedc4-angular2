//import {logClass} from './log-class';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Person = (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Person = __decorate([
        //import {logClass} from './log-class';
        logClass
    ], Person);
    return Person;
}());
var Dog = (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog = __decorate([
        logClass
    ], Dog);
    return Dog;
}());
var person = new Person("Wekoslav", "Stefanovski");
console.log(person.getFullName());
person = new Person("John", "Doe");
console.log(person.getFullName());
person = new Person("Jane", "Doe");
console.log(person.getFullName());
var rex = new Dog("Rex");
var fido = new Dog("fido");
