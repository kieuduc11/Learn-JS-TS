const fullName = "Kieu Van Duc";
const birthYear = 2004;
let isStudent = true;

const today = new Date();
const currentYear = today.getFullYear();

let myAge = currentYear - birthYear;

const introduction = `
Name: ${fullName}
Age: ${myAge}
Student: ${isStudent}`;

console.log(introduction);
