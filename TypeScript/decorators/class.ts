//import {logClass} from './log-class';

@logClass
class Person {
    constructor(public firstName: string, public lastName: string){
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

@logClass
class Dog{

    owner:Person;

    constructor(public name: string){

    }
}

var person = new Person("Wekoslav", "Stefanovski");
console.log(person.getFullName());

person = new Person("John", "Doe");
console.log(person.getFullName());

person = new Person("Jane", "Doe");
console.log(person.getFullName());

var rex = new Dog("Rex");
rex.owner = person;
var fido = new Dog("fido");
