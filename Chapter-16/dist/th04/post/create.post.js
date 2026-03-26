import { renderTable } from "./helper.post.js";
const handleAddNewPost = async () => {
    const title = document.getElementById("titleInput").value;
    const content = document.getElementById("contentInput").value;
    await fetch("http://localhost:8000/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, content })
    });
    await renderTable();
};
export { handleAddNewPost };
