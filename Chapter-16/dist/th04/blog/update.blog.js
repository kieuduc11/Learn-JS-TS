import { renderTable } from "./helper.blog.js";
const handleUpdateBlog = async (id) => {
    const title = document.getElementById("titleInput1").value;
    const author = document.getElementById("authorInput1").value;
    const content = document.getElementById("contentInput1").value;
    await fetch(`http://localhost:8000/blogs/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, author, content })
    });
    await renderTable();
};
export { handleUpdateBlog };
