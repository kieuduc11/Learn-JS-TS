"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student1 = {
    name: "Kieu Duc",
    age: 22,
    address: "Ha Noi"
};
const student2 = {
    name: "Lan Anh",
    age: 21,
    address: "Hai Duong"
};
const printInfo = (student) => {
    console.log("Student name is", student.name);
};
printInfo(student1);
printInfo(student2);
