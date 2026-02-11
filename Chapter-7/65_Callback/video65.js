const greeting = (name, callback) => {
    console.log("Xin chào:", name);
    callback();
}

const sayHello = () => {
    console.log("Hello");
}

const sayHi = () => {
    console.log("Hi");
}

greeting("Duc", sayHello);
greeting("Lan Anh", sayHi)

