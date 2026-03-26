import { renderTable } from "./helper.user.js";

const handleUpdateUser = async (id: number) => {
    const name = (document.getElementById("nameInput1") as HTMLInputElement).value;
    const email = (document.getElementById("emailInput1") as HTMLInputElement).value;
    await fetch(`http://localhost:8000/users/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email })
    });
    await renderTable();
};

export {handleUpdateUser};