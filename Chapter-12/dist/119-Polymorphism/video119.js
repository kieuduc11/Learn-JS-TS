;
class Cat {
    makeSound() {
        console.log("Meo meo");
    }
    ;
}
;
class Dog {
    makeSound() {
        console.log("Gau gau");
    }
    ;
}
;
class Pig {
    makeSound() {
        console.log("Ec ec");
    }
    ;
}
;
const cat = new Cat();
const dog = new Dog();
const pig = new Pig();
const myZoo = [cat, dog, pig];
myZoo.forEach((animal, index) => {
    animal.makeSound();
});
export {};
