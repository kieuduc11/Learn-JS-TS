import { renderTable } from "./helper.blog.js";
const handleDelBlog = async (id) => {
    await fetch(`http://localhost:8000/blogs/${id}`, {
        method: "DELETE"
    });
    await renderTable();
};
export { handleDelBlog };
