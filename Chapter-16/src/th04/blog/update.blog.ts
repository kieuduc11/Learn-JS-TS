import { renderTable } from "./helper.blog.js";

const handleUpdateBlog = async (id: number) => {
    const title = (document.getElementById("titleInput1") as HTMLInputElement).value;
    const author = (document.getElementById("authorInput1") as HTMLInputElement).value;
    const content = (document.getElementById("contentInput1") as HTMLInputElement).value;
    await fetch(`http://localhost:8000/blogs/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, author, content })
    });
    await renderTable();
};

export {handleUpdateBlog};