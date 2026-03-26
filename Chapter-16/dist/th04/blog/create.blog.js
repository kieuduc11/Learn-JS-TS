import { renderTable } from "./helper.blog.js";
const handleAddNewBlog = async () => {
    const title = document.getElementById("titleInput").value;
    const author = document.getElementById("authorInput").value;
    const content = document.getElementById("contentInput").value;
    await fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, author, content })
    });
    await renderTable();
};
export { handleAddNewBlog };
