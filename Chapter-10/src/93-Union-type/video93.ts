export {};

let username: number | string = "Kieu Duc";

const printUsername = (username: number | string) => {
    if(typeof(username) === "string") {
        console.log("Your username is", username.toUpperCase());
    };
};

printUsername(username);