function demo(p1, p2, p3, p4, p5) {
    if (p3 === void 0) { p3 = "Default"; }
    if (p5 === void 0) { p5 = 7; }
    console.log(p1);
    console.log(p2);
    console.log(p3);
    console.log(p4);
    console.log(p5);
}
demo(1, 2, 3, 4, 6);
demo(1, 2, 3, 4);
demo(1, 2);
demo(1, 2, 3);
function spread(separator) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    return values.map(function (v) { return v.toUpper(); }).join(separator);
}
