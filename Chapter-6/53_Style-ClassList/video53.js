const textElement = document.getElementById("text");
const changeBtnElement = document.getElementById("changeBtn");
const backBtnElement = document.getElementById("backBtn");
console.log(textElement, changeBtnElement, backBtnElement);

changeBtnElement.addEventListener("click", () => {
    textElement.style.color = "white";
    textElement.style.backgroundColor = "black";
    textElement.classList.add("new-class-1", "new-class-2");
});

backBtnElement.addEventListener("click", () => {
    textElement.style.color = "black";
    textElement.style.backgroundColor = "unset";
    textElement.classList.remove("new-class-1", "new-class-2");
});