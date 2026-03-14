export {};

function testString(value: string) {
    return value;
};

function testNumber(value: number) {
    return value;
};

function testGeneric<T>(value: T) {
    return value;
};

const a = testGeneric<string>("Kieu Duc");
const b = testGeneric<number>(2);
