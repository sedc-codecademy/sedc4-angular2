
// var numbers = [1,2,3,4,5,6,7,8];

// var evenSquares = 
//     numbers.filter(item => item % 2 === 0)
//            .map(item => item*item);

// console.log(evenSquares); 

// class Person {
//     constructor(public age: number){}

//     growOld = () => {
//         console.log(this);
//         this.age++;
//     }
// }

// var person = new Person(1);
// var older = person.growOld;

// older();
// console.log(person.age);
function fooManager(){
    let foo = 123;
    if (true) {
        let foo = 456;
        console.log(foo);
    }
    console.log(foo); // 123
}

var foo = "foo";

const DaysInWeek = 7;
//DaysInWeek = 11;
