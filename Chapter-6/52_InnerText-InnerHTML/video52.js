const textContentElement = document.getElementById("textContent");
const innerTextBtnElement = document.getElementById("innerTextBtn");
const innerHTMLBtnElement = document.getElementById("innerHTMLBtn");

innerTextBtnElement.addEventListener("click", () => {
    textContentElement.innerText = "Thay đổi chữ bên trong element";
});

innerHTMLBtnElement.addEventListener("click", () => {
    textContentElement.innerHTML = "<em>Chèn nguyên đoạn HTML vào trong element<em>"
});
