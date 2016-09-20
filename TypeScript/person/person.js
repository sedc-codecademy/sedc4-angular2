var typescript = {
    firstName: "Wekoslav",
    lastName: "Stefanovski",
    age: 0x27,
    walk: function () { return "Walking on other sunshine"; }
};
var angular = {
    firstName: "Igor",
    lastName: "Talevski",
    walk: function () { return "Walking on sunshine"; }
};
function getFullName(person) {
    var result = person.firstName + " " + person.lastName + " (" + person.walk() + ")";
    return result;
}
console.log(getFullName(typescript));
console.log(getFullName(angular));
