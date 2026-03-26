import { renderTable } from "./helper.post.js";
const handleUpdatePost = async (id) => {
    const title = document.getElementById("titleInput1").value;
    const content = document.getElementById("contentInput1").value;
    await fetch(`http://localhost:8000/posts/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, content })
    });
    await renderTable();
};
export { handleUpdatePost };
