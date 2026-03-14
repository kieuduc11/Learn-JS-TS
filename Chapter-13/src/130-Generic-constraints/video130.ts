export {};

// Constraint with interface
interface IUser {
    id: number;
    name: string;
};

function testInterface<T extends IUser>(value: T) {
    console.log(value);
};

testInterface({id: 1, name:"Kieu Duc"});
testInterface({id: 2, name:"Lan Anh", age: 22});

// Constraint with class
class Animal {
    move() {
        console.log("Moving...");
    };
};

class Dog extends Animal {
    bark() {
        console.log("woof woof");
    };
};

function testClass<T extends Animal>(value: T) {
    value.move();
    if(value instanceof Dog) {
        value.bark();
    };
};

const a = new Animal();
const b = new Dog();
testClass(a);
testClass(b);

// Constraint with key of
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
};

const user = {name: "Kieu Duc", age: 22};
getProperty(user, "name");
getProperty(user, "age");