var operators = {
    '+': function (x, y) { return x + y; },
    '-': function (x, y) { return x - y; },
    '*': function (x, y) { return x * y; },
    '/': function (x, y) { return x / y; },
};
var person = {
    firstName: undefined,
    lastName: "Stefanovski",
};
function getFullName(person) {
    return person.firstName + " " + person.lastName;
}
function calculate() {
    var firstInput = document.getElementById("first");
    var first = firstInput.valueAsNumber;
    var secondInput = document.getElementById("second");
    var second = secondInput.valueAsNumber;
    var operator = document.getElementById("operator");
    var selectedOperator = operators[operator.value];
    var result = realCalc(first, second, selectedOperator);
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = result.toString();
}
function realCalc(first, second, operation) {
    return operation(first, second);
}
realCalc(1, 2, function (x, y) { return x + y; });
