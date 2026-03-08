export {};

type TStudent = {
    name: string;
    age: number;
};

type TProfile = {
    id: number;
    language: string;
};

type TCoder = TProfile & TStudent;

const coder1: TCoder = {
    id: 1102,
    name: "Kieu Duc",
    age: 22,
    language: "Typescript"
};

console.log(coder1);