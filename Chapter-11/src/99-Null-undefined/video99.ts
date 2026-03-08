export {};

let name: string | null = "Kieu Duc";

const printName = (name: string | null) => {
    if(name) {
        console.log("My name:", name);
    };
};

printName(name);