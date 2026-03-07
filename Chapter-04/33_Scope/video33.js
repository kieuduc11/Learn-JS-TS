let globalVar = 10; // phạm vi global

function greeting() {
    let name = 'Duc'; // phạm vi hàm
    if(name === 'Lan Anh') {
        let text = "Chào sếp"; // phạm vi khối
        console.log(text, name);
    }
    console.log("Xin chào", name);
}