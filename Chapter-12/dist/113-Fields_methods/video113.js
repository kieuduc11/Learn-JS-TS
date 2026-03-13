class Student {
    study() {
        console.log(`${this.name} is studying...`);
    }
    ;
}
;
const student = new Student();
student.id = 1;
student.name = "Kieu Duc";
student.study();
export {};
