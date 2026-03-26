import { renderTable } from "./helper.user.js";

const handleDelUser = async (id: number) => {
    await fetch(`http://localhost:8000/users/${id}`, {
        method: "DELETE"
    });

    await renderTable();
};

export {handleDelUser};