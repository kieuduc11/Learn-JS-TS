class Animal {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    ;
    makeSound() {
        console.log(`Id ${this.id} is making sound...`);
    }
    ;
}
;
const animal = new Animal(1, "Dog");
console.log(animal.name);
animal.makeSound();
export {};
