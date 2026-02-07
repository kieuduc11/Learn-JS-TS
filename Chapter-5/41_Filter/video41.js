const age = [10, 12, 18, 9, 32, 25];

const under18 = age.filter((item, index) => {
    return item < 18;
});

console.log(under18);
