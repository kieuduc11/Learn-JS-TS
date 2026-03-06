"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let username = "Kieu Duc";
const printUsername = (username) => {
    if (typeof (username) === "string") {
        console.log("Your username is", username.toUpperCase());
    }
    ;
};
printUsername(username);
