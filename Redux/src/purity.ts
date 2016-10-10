// var first: any = {value : 6};
// var second = 12;
// var result: number;

// function impureAdd(){
//     result = first.value+second;
// }

// console.log(result);
// impureAdd();
// console.log(result);
// first = 10;
// impureAdd();
// console.log(result);


// function pureAdd(first: number, second: number){
//     let result = first+second;
//     return result;
// }

// var pureResult = pureAdd(2 ,8);
// pureResult = pureAdd(2 ,8);
// pureResult = pureAdd(2 ,8);

// console.log(pureResult);

var array = [1, 2, 3, 4];

var squares = array.map(n => n*n);
console.log(squares);

var evens = array.filter(n => n%2 == 0);
console.log(evens);

let sum = 0;
for (var i=0; i < array.length; i++){
    sum = sum + array[i];
}

let product = 1;
for (var i=0; i < array.length; i++){
    product = product * array[i];
}

let dashed = "";
for (var i=0; i < array.length; i++){
    dashed = dashed + " - " + array[i];
}

let sumReduce = array.reduce((sum, element) => sum + element * element, 0);
console.log(sumReduce);

let productReduce = array.reduce((product, element) => product * element, 1);
console.log(productReduce);

let dashReduce = array.reduce((dashed, element) => dashed +"-"+element, "");
console.log(dashReduce);