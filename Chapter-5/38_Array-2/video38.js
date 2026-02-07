const names = ["Duc", "Lan Anh", "Dat", "Truong", "Quan"];
console.log(names);

names[3] = "Bo";
console.log(names);

// Thêm vào mảng
names.push("Khanh"); // thêm vào cuối
names.unshift("Truong"); // thêm vào đầu
console.log(names);

// Xóa khỏi mảng
names.pop(); // xóa phần tử cuối cùng
names.shift(); // xóa phần tử đầu tiên
console.log(names);

