export {};

type TStudent = {
    name: string;
    age: number;
    address: string;
};

const student1: TStudent = {
    name: "Kieu Duc",
    age: 22,
    address: "Ha Noi"
};

const student2: TStudent = {
    name: "Lan Anh",
    age: 21,
    address: "Hai Duong"
};

const printInfo = (student: TStudent) => {
    console.log("Student name is", student.name);
};

printInfo(student1);
printInfo(student2);