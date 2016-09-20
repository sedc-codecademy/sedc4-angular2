class Person2 {
    firstName: string;
    lastName : string;
    gender: Gender;
}

enum Gender {
    Male = 7,
    Female = 11
}

let weko2 = new Person2();
weko2.firstName = "Wekoslav";
weko2.lastName = "Stefanovski";
weko2.gender = Gender.Male; 

function displayBigText(text: string | string[]){
    let result:string;
    if (typeof text === "string"){
        result = text.toUpperCase();
    } else {
        result = text.map(i => i.toUpperCase()).join(",");
    }
    console.log(result);
}

displayBigText("Wekoslav");

displayBigText(["Wekoslav", "Stefanovski"]);

type WorldSides = "West" | "East" | "North" | "South";

let direction : WorldSides;

direction = "West";
direction = null;
direction = "East";

