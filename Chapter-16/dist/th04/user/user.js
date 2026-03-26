import { renderTable, handleCloseModal, handleShowToast, handleFillInput } from "./helper.user.js";
import { handleAddNewUser } from "./create.user.js";
import { handleDelUser } from "./delete.user.js";
import { handleUpdateUser } from "./update.user.js";
const createUserBtn = document.getElementById("createUserBtn");
createUserBtn?.addEventListener("click", async () => {
    await handleAddNewUser();
    document.activeElement?.blur();
    handleCloseModal("createUserModal");
    handleShowToast("createUserToast");
});
const tableUser = document.querySelector("#tableUser tbody");
tableUser?.addEventListener("click", async (e) => {
    const target = e.target;
    if (target.classList.contains("deleteUserBtn")) {
        const id = target.getAttribute("data-id");
        if (id) {
            await handleDelUser(Number(id));
            handleShowToast("delUserToast");
        }
        ;
    }
    ;
    if (target.classList.contains("editUserBtn")) {
        const id = target.getAttribute("data-id");
        if (id) {
            handleFillInput(Number(id));
            currentUserId = id;
        }
        ;
    }
    ;
});
const updateUserBtn = document.getElementById("updateUserBtn");
let currentUserId = null;
updateUserBtn?.addEventListener("click", async () => {
    if (currentUserId) {
        await handleUpdateUser(Number(currentUserId));
        currentUserId = null;
        document.activeElement?.blur();
        handleCloseModal("updateUserModal");
        handleShowToast("editUserToast");
    }
    ;
});
const modalElement = document.getElementById("createUserModal");
const formElement = document.getElementById("createUserForm");
modalElement?.addEventListener("hidden.bs.modal", () => {
    formElement.reset();
});
renderTable();
