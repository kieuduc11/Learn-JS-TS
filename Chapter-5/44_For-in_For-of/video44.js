const person = {
    name: "Kieu Duc",
    age: 22,
    address: "Ha Noi"
}

for (const key in person) {
    console.log(key, person[key]);
}

console.log("==========");
for (const value of Object.values(person)) {
    console.log(value);
}

console.log("==========");
for (const [key, value] of Object.entries(person)) {
    console.log(key, value);
}
