export {};

type TRole = "Student" | "Teacher";

class User {
    public name: string;
    private _email: string;
    protected role: TRole;

    constructor(name: string, email: string, role?: TRole) {
        this.name = name;
        this._email = email;
        this.role = role ?? "Student";
    };

    public get email(): string {
        return this._email;
    };
    public set email(value: string) {
        this._email = value;
    };

    printUserInfo() {
        console.log(`[GET-INFO] Name: ${this.name}, email: ${this._email}, role: ${this.role}`);
    };
};

class Teacher extends User {
    courses: string[] = [];

    // constructor(name: string, email: string, role: TRole, courses: string[]) {
    //     super(name, email, role);
    //     this.courses = courses;
    // };

    addCourse(courseName: string) {
        this.courses.push(courseName);
    };

    printUserInfo() {
        const courseName = this.courses.join(",")
        console.log(`[${this.role}] ${this.name} - Course taught: ${courseName}`);
    };
};

class Student extends User {
    enrolledCourses: string[] = [];

    // constructor(name: string, email:string, role: TRole, enrolledCourses: string[]) {
    //     super(name, email);
    //     this.enrolledCourses = enrolledCourses;
    // };

    enroll(courseName: string) {
        this.enrolledCourses.push(courseName);
    };

    printUserInfo() {
        const enrolledCourseName = this.enrolledCourses.join(",");
        console.log(`[${this.role}] ${this.name} - Course taught: ${enrolledCourseName}`);
    };
};


const hoidanit = new Student("Hoidanit", "hoidanit@email.com");
hoidanit.enroll("TypeScript Pro");

const eric = new Teacher("Eric", "eric@email.com", "Teacher");
eric.addCourse("React");

hoidanit.printUserInfo();
eric.printUserInfo();


