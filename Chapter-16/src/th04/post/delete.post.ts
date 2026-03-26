import { renderTable } from "./helper.post.js";

const handleDelPost = async (id: number) => {
    await fetch(`http://localhost:8000/posts/${id}`, {
        method: "DELETE"
    });

    await renderTable();
};

export {handleDelPost};