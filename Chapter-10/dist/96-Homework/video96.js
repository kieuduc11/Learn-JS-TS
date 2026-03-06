"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const registerStudentToCourse = (student, course) => {
    course.students.push(student);
};
const printCourseInfo = (course) => {
    console.log("Tên khóa học:", course.title);
    if (course.students.length === 0) {
        console.log("Chưa có học viên nào.");
    }
    else {
        course.students.forEach((student) => {
            console.log("Tên học viên:", student.name);
        });
    }
    ;
};
const student1 = {
    id: 101,
    name: "Kieu Duc",
    email: "kieuduc223@gmail.com",
    isPremium: true,
    contact: 123464654
};
const student2 = {
    id: 102,
    name: "Lan Anh",
    email: "lananh1512@gmail.com",
    isPremium: true,
    contact: "lananh1512@gmail.com"
};
const course1 = {
    courseId: 123,
    title: "Typescript",
    price: 1000000,
    students: []
};
registerStudentToCourse(student1, course1);
registerStudentToCourse(student2, course1);
printCourseInfo(course1);
