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
var squares = array.map(function (n) { return n * n; });
console.log(squares);
var evens = array.filter(function (n) { return n % 2 == 0; });
console.log(evens);
var sum = 0;
for (var i = 0; i < array.length; i++) {
    sum = sum + array[i];
}
var product = 1;
for (var i = 0; i < array.length; i++) {
    product = product * array[i];
}
var dashed = "";
for (var i = 0; i < array.length; i++) {
    dashed = dashed + " - " + array[i];
}
var sumReduce = array.reduce(function (sum, element) { return sum + element * element; }, 0);
console.log(sumReduce);
var productReduce = array.reduce(function (product, element) { return product * element; }, 1);
console.log(productReduce);
var dashReduce = array.reduce(function (dashed, element) { return dashed + "-" + element; }, "");
console.log(dashReduce);
