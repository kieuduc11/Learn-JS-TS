class Animal {
    constructor(name) {
        this.name = name;
    }
    ;
    sleep() {
        console.log(`${this.name} is sleeping...`);
    }
    ;
}
;
class Dog extends Animal {
    makeSound() {
        console.log("Gau gau...");
    }
    ;
}
;
class Cat extends Animal {
    makeSound() {
        console.log("Meow meow");
    }
    ;
}
;
export {};
