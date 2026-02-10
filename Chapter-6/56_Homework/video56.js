const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");
const btnLogin = document.getElementById("btnLogin");

const username = "kieuduc112";
const password = "123456";

btnLogin.addEventListener("click", () => {
    if(usernameInput.value === username && passwordInput.value === password) {
        alert("Login success");
        window.location.href = "success.html";
    } else {
        alert("Wrong username or password");
        usernameInput.style.borderColor = "red";
        passwordInput.style.borderColor = "red";
    }
});