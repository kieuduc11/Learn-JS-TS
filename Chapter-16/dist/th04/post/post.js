import { renderTable, handleCloseModal, handleShowToast, handleFillInput } from "./helper.post.js";
import { handleAddNewPost } from "./create.post.js";
import { handleDelPost } from "./delete.post.js";
import { handleUpdatePost } from "./update.post.js";
const createPostBtn = document.getElementById("createPostBtn");
createPostBtn?.addEventListener("click", async () => {
    await handleAddNewPost();
    document.activeElement?.blur();
    handleCloseModal("createPostModal");
    handleShowToast("createPostToast");
});
const tablePost = document.querySelector("#tablePost tbody");
tablePost?.addEventListener("click", async (e) => {
    const target = e.target;
    if (target.classList.contains("deletePostBtn")) {
        const id = target.getAttribute("data-id");
        if (id) {
            await handleDelPost(Number(id));
            handleShowToast("delPostToast");
        }
        ;
    }
    ;
    if (target.classList.contains("editPostBtn")) {
        const id = target.getAttribute("data-id");
        if (id) {
            handleFillInput(Number(id));
            currentPostId = id;
        }
        ;
    }
    ;
});
const updatePostBtn = document.getElementById("updatePostBtn");
let currentPostId = null;
updatePostBtn?.addEventListener("click", async () => {
    if (currentPostId) {
        await handleUpdatePost(Number(currentPostId));
        currentPostId = null;
        document.activeElement?.blur();
        handleCloseModal("updatePostModal");
        handleShowToast("editPostToast");
    }
    ;
});
const modalElement = document.getElementById("createPostModal");
const formElement = document.getElementById("createPostForm");
modalElement?.addEventListener("hidden.bs.modal", () => {
    formElement.reset();
});
renderTable();
