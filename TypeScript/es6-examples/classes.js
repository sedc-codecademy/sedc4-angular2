var Animal = (function () {
    function Animal(name) {
        this.name = name;
        this.square = function (x) { return x * x; };
    }
    Animal.prototype.makeNoise = function () {
        console.log("making animal noises");
    };
    Animal.cube = function (x) { return x * x * x; };
    return Animal;
})();
var rex = new Animal("rex");
console.log(rex.square(3));
console.log(Animal.cube(4));
