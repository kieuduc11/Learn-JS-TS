import { renderTable } from "./helper.post.js";

const handleUpdatePost = async (id: number) => {
    const title = (document.getElementById("titleInput1") as HTMLInputElement).value;
    const content = (document.getElementById("contentInput1") as HTMLInputElement).value;
    await fetch(`http://localhost:8000/posts/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, content })
    });
    await renderTable();
};

export {handleUpdatePost};