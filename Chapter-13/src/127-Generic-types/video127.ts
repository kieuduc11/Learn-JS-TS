export {};

type myArray<T> = T[];
type myData<T> = {
    data: T;
};

const a: myArray<number> = [0, 1, 2];
const b: myData<string> = {
    data: "Kieu Duc"
};

console.log(a);
console.log(b);
