export {};

const greeting = (name: string) => {
    console.log("Hello", name);
};

const sum = (a: number, b: number) => {
    return a + b;
};

greeting("Kieu Duc");
console.log("a + b =", sum(9, 6));
