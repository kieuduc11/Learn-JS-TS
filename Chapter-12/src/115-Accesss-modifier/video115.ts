export{};

class Animal {
    private id: number;
    public name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    };

    public makeSound() {
        console.log(`Id ${this.id} is making sound...`);
    };
};

const animal = new Animal(1, "Dog");
console.log(animal.name);
animal.makeSound();

