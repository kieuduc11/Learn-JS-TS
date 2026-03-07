console.log("Break:");
for(let i = 1; i < 6; i++) {
    if(i === 4) break;
    console.log("i =", i);
}

console.log("Continue:");
for(let i = 1; i < 6; i++) {
    if(i === 4) continue;
    console.log("i =", i);
}
