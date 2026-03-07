const inputElement = document.querySelector("input");
const submitBtn = document.getElementById("submitBtn");
const nameElement = document.getElementById("name");
const prevNameElement = document.getElementById("prevName");

const prevName = localStorage.getItem("Name");
if(prevName) {
    prevNameElement.innerHTML = `<b>${prevName}</b>`;
}

submitBtn.addEventListener("click", () => {
    localStorage.setItem("Name", inputElement.value);
    nameElement.innerHTML = `<b>${inputElement.value}</b>`;
});
