export {};

class Person {
    name: string;
    age: number;

    constructor(name:string, age: number) {
        this.name = name;
        this.age = age;
    };
};

const person = new Person("Kieu Duc", 22);
console.log(`Name: ${person.name}, age: ${person.age}`);
