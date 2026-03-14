export {};

function merge<T, U>(a: T, b: U) {
    return [a, b];
};

const x = merge<string, number>("Kieu Duc", 22);
console.log(x);
