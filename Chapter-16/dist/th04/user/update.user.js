import { renderTable } from "./helper.user.js";
const handleUpdateUser = async (id) => {
    const name = document.getElementById("nameInput1").value;
    const email = document.getElementById("emailInput1").value;
    await fetch(`http://localhost:8000/users/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email })
    });
    await renderTable();
};
export { handleUpdateUser };
