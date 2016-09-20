class Person{

    public age = 0;

    constructor(public firstName: string, 
                public lastName: string){
    }

    public getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }

}

var weko = new Person("Wekoslav","Stefanovski");
console.log(weko.getFullName());