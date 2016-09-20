function demo(p1, p2, p3 : any = "Default", p4?, p5 = 7){
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

function spread(separator: string, ...values: string[]){
    return values.map(v => v.toUpper()).join(separator);
}