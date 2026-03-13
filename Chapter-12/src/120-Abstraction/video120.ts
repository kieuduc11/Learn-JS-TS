export {};

abstract class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    };

    abstract makeSound(): void;

    sleep() {
        console.log(`${this.name} is sleeping...`);
    };
};

class Dog extends Animal {
    makeSound(): void {
        console.log("Gau gau...");
    };
};

class Cat extends Animal {
    makeSound(): void {
        console.log("Meow meow");
    };
};