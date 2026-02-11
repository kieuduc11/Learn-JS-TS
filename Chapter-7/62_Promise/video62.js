console.log("1. Bắt đầu");

const myPromise = new Promise((resolve, reject) => {
    console.log("2. Dòng này trong Promise (chạy ngay lập tức)");
    setTimeout(() => {
        resolve("4. Kịch bản hoàn thành")
    }, 3000);
});

myPromise.then(message => {
    console.log(message);
});

console.log("3. Kết thúc kịch bản chính");

