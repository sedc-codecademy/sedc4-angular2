var operators : {[key:string]: (x:number, y:number)=> number} = 
{
    '+': (x:number, y:number) => x+y,
    '-': (x:number, y:number) => x-y,
    '*': (x:number, y:number) => x*y,
    '/': (x:number, y:number) => x/y,
};

var person : {firstName: string, lastName: string} = {
    firstName: undefined,
    lastName: "Stefanovski",
}

function getFullName(person: {firstName: string, lastName: string}){
    return `${person.firstName} ${person.lastName}`
}

function calculate(){
    var firstInput = <HTMLInputElement> document.getElementById("first");
    var first = firstInput.valueAsNumber;

    var secondInput = <HTMLInputElement> document.getElementById("second");
    var second = secondInput.valueAsNumber;

    var operator = <HTMLSelectElement> document.getElementById("operator");
    var selectedOperator = operators[operator.value];

    var result = realCalc(first, second, selectedOperator);

    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = result.toString();
}

function realCalc(first : number, second : number, 
    operation: (a:number, b: number) => number){
    return operation(first, second);
}

realCalc(1, 2, (x, y) => x+y);
