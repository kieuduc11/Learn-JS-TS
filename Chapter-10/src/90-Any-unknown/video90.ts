export {};

let name1: any = "Kieu Duc";
name1 = 25;
name1 = ["Duc", "Dat", "Lan Anh"];

let name2: unknown = "Kieu Duc";
if(typeof(name2) === "string") {
    name2.toUpperCase();
}