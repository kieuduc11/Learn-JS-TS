export{};

interface IAnimal {
    makeSound(): void;
};

class Cat implements IAnimal {
    makeSound(): void {
        console.log("Meo meo");
    };
};

class Dog implements IAnimal {
    makeSound(): void {
        console.log("Gau gau");
    };
};

class Pig implements IAnimal {
    makeSound(): void {
        console.log("Ec ec");
    };
};

const cat = new Cat();
const dog = new Dog();
const pig = new Pig();

const myZoo: IAnimal[] = [cat, dog, pig];
myZoo.forEach((animal, index) => {
    animal.makeSound();
});

