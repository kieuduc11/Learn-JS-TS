const doSomething = () => {
  const a = 10,
    b = 0;
  if (b === 0) {
    throw new Error("Chia cho 0");
  }
  return a / b;
};

try {
  doSomething();
} catch (error) {
  console.log("Có lỗi xảy ra:", error);
} finally {
  console.log("Câu lệnh ở finally");
}
