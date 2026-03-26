import { renderTable, handleCloseModal, handleShowToast, handleFillInput } from "./helper.blog.js";
import { handleAddNewBlog } from "./create.blog.js";
import { handleDelBlog } from "./delete.blog.js";
import { handleUpdateBlog } from "./update.blog.js";
const createBlogBtn = document.getElementById("createBlogBtn");
createBlogBtn?.addEventListener("click", async () => {
    await handleAddNewBlog();
    document.activeElement?.blur();
    handleCloseModal("createBlogModal");
    handleShowToast("createBlogToast");
});
const tableBlog = document.querySelector("#tableBlog tbody");
tableBlog?.addEventListener("click", async (e) => {
    const target = e.target;
    if (target.classList.contains("deleteBlogBtn")) {
        const id = target.getAttribute("data-id");
        if (id) {
            await handleDelBlog(Number(id));
            handleShowToast("delBlogToast");
        }
        ;
    }
    ;
    if (target.classList.contains("editBlogBtn")) {
        const id = target.getAttribute("data-id");
        if (id) {
            handleFillInput(Number(id));
            currentBlogId = id;
        }
        ;
    }
    ;
});
const updateBlogBtn = document.getElementById("updateBlogBtn");
let currentBlogId = null;
updateBlogBtn?.addEventListener("click", async () => {
    if (currentBlogId) {
        await handleUpdateBlog(Number(currentBlogId));
        currentBlogId = null;
        document.activeElement?.blur();
        handleCloseModal("updateBlogModal");
        handleShowToast("editBlogToast");
    }
    ;
});
const modalElement = document.getElementById("createBlogModal");
const formElement = document.getElementById("createBlogForm");
modalElement?.addEventListener("hidden.bs.modal", () => {
    formElement.reset();
});
renderTable();
