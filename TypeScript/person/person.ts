var typescript = {
    firstName: "Wekoslav",
    lastName: "Stefanovski",
    age: 0x27,
    walk: () => "Walking on other sunshine"
}

var angular = {
    firstName: "Igor",
    lastName: "Talevski",
    walk: () => "Walking on sunshine"
}

interface IPerson {
    firstName: string;
    lastName: string;
    walk: () => string;
}

function getFullName(person: IPerson){
    let result = `${person.firstName} ${person.lastName} (${person.walk()})`;
    return result;
}

console.log(getFullName(typescript));
console.log(getFullName(angular));


