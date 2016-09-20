class Animal {
    constructor(public name:string){}

    makeNoise(){
        console.log("making animal noises");
    }

    square = x => x*x;

    static cube = x => x * x * x;
}

var rex = new Animal("rex");
console.log(rex.square(3));
console.log(Animal.cube(4));