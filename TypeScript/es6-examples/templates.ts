let [firstName, lastName, age] = ["Wekoslav", "Stefanovski", 0x27]


let display = 
`Hello, my name is ${firstName}, and my last name is ${lastName}.
I'm ${age} years old.`;

console.log(display);

let [color, spanColor] = ["red", "blue"]

let html = `<div style="color:${color}">
    Hello 
    <span style="color:${spanColor}">
        World!
    </span>
</div>`

document.write(html);