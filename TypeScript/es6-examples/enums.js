var Person2 = (function () {
    function Person2() {
    }
    return Person2;
})();
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 7] = "Male";
    Gender[Gender["Female"] = 11] = "Female";
})(Gender || (Gender = {}));
var weko2 = new Person2();
weko2.firstName = "Wekoslav";
weko2.lastName = "Stefanovski";
weko2.gender = Gender.Male;
function displayBigText(text) {
    var result;
    if (typeof text === "string") {
        result = text.toUpperCase();
    }
    else {
        result = text.map(function (i) { return i.toUpperCase(); }).join(",");
    }
    console.log(result);
}
displayBigText("Wekoslav");
displayBigText(["Wekoslav", "Stefanovski"]);
"West" | "East" | "North" | "South";
var direction;
direction = "West";
direction = null;
direction = "East";
