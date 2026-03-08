export {};

const inputElement = document.querySelector("input");
const submitBtn = document.querySelector("button");

submitBtn?.addEventListener("click", () => {
    alert(inputElement?.value);
}); 