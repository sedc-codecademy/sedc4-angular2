// let rect = { x: 0, y: 10, width: 15, height: 20 };
// let {x, y,,height} = rect;

// console.log(x);
// console.log(y);
// console.log(height);

//let array = [50,7,false,{value: "value"}];

//let first = array[0];
//let other = array.slice(1);
// let first;
// [first, ...array] = array;

// console.log(first);
// console.log(array);

// for (let item of array){
//     console.log(item);
// }

// let x = "first";
// let y = "second";

// [x, y] = [y, x];

// console.log(x);
// console.log(y);

// let array = [1,2,3,4,5];
// Math.max(...array);

let first = [1, 2];
let second = [3,4];
let whole = [...first, ...second];

let third = [7, ...first, 11];