import { renderTable } from "./helper.blog.js";

const handleAddNewBlog = async () => {
    const title = (document.getElementById("titleInput") as HTMLInputElement).value;
    const author = (document.getElementById("authorInput") as HTMLInputElement).value;
    const content = (document.getElementById("contentInput") as HTMLInputElement).value;

    await fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, author, content })
    });
    await renderTable();
};

export {handleAddNewBlog};

