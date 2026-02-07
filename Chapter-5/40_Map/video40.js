const scores = [10, 5, 7, 3, 4];
scores.forEach((value, index) => {
    console.log("Index:", index, "Value:", value);
});

const newScores = scores.map((value, index) => {
    return value * 2;
});

console.log(newScores);
