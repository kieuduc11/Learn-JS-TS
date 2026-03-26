import { renderTable } from "./helper.post.js";

const handleAddNewPost = async () => {
    const title = (document.getElementById("titleInput") as HTMLInputElement).value;
    const content = (document.getElementById("contentInput") as HTMLInputElement).value;

    await fetch("http://localhost:8000/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, content })
    });
    await renderTable();
};

export {handleAddNewPost};
