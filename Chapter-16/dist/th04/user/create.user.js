import { renderTable } from "./helper.user.js";
const handleAddNewUser = async () => {
    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;
    await fetch("http://localhost:8000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email })
    });
    await renderTable();
};
export { handleAddNewUser };
