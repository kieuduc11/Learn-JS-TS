const products = [
    {
        name: "T-shirt",
        price: 200,
        inStock: true
    },
    {
        name: "Jeans",
        price: 300,
        inStock: true
    },
    {
        name: "Dress",
        price: 450,
        inStock: false
    },
    {
        name: "Sweater",
        price: 250,
        inStock: true
    },
    {
        name: "Scarf",
        price: 150,
        inStock: false
    },

]

// In ra tên sản phẩm đầu tiên
console.log("Câu 1:");
console.log("Tên sản phẩm đầu tin:", products[0].name);

// Đổi giá sản phẩm thứ 2 thành 150 và in ra tất cả sản phẩm
console.log("Câu 2:");
products[1].price = 150;
products.forEach((item, index) => {
    console.log(item);
});

// Thêm một sản phẩm vào cuối mảng và in ra tất cả sản phẩm
console.log("Câu 3:");
products.push({
    name: "Hat",
    price: 50,
    inStock: false
});
products.forEach((item, index) => {
    console.log(item);
});

// Xóa sản phẩm cuối cùng ra khỏi danh sách và in ra tất cả sản phẩm
console.log("Câu 4:");
products.pop();
products.forEach((item, index) => {
    console.log(item);
});

// Dùng forEach() để in ra tất cả tên sản phẩm
console.log("Câu 5:");
products.forEach((item, index) => {
    console.log(item.name);
});

// Dùng map() để tạo mảng mới chỉ chứa giá sản phẩm
console.log("Câu 6:");
const priceList = products.map((item, index) => {
    return item.price;
});
console.log(priceList);


// Dùng filter() để lấy các sản phẩm còn hàng
console.log("Câu 7:");
const inStockProducts = products.filter((item, index) => {
    return item.inStock;
});
console.log(inStockProducts);

// Dùng for...in để duyệt qua thuộc tính của sản phầm đầu tiên
for(const key in products[0]) {
    console.log(key, products[0][key]);
}
