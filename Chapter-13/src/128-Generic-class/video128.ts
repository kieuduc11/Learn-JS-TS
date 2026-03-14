export {};

class Test<T> {
    content: T;

    constructor(content: T) {
        this.content = content;
    };
};

const a = new Test<string>("Bla bla");
console.log(a.content);
