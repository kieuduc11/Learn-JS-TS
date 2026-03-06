export {};

const student: {
    name: string,
    age: number,
    phone?: number
} = {
    name: "Kieu Duc",
    age: 22,
    phone: 123456548
}

const print = (student: {
    name: string,
    age: number,
    phone?: number
}) => {
    console.log("Studen name is", student.name);
}

print(student);