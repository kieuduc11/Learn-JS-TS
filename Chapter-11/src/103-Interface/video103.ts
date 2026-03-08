export {};

interface IPerson  {
    name: string;
    age: number;
    sayHi: () => void;  
};

interface IStudent extends IPerson{
    id: number;
    class: string;
    score: number;
};

const mySelf: IStudent = {
    id: 1102,
    name: "Kieu Duc",
    age: 22,
    class: "PM27.23",
    score: 8,
    sayHi: () => console.log("My name is", mySelf.name)
};

console.log(mySelf);
mySelf.sayHi();



