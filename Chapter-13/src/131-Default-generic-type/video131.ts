export {};

interface ITest<T = string | number> {
    data: T;
};

const a: ITest = {
    data: "Hello"
};

const b: ITest = {
    data: 50
};

console.log(a);
console.log(b);
