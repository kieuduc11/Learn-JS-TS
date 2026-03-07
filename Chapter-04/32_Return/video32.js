const sum = (a, b, c) => {
  if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number")
    return;
  return a + b + c;
};

const result = sum(1, 2, 3);
console.log(result);
