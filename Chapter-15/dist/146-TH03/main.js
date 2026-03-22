import { handleCloseModal } from "./close-modal.js";
import { handleSaveTodo } from "./save.todo.js";
import { handleDelTodo } from "./del.todo.js";
const saveBtn = document.getElementById("save-btn");
const renderTable = () => {
    const todoListStr = localStorage.getItem("todoList");
    const todoListArr = todoListStr ? JSON.parse(todoListStr) : [];
    const html = todoListArr.map((todo, index) => {
        return `
            <tr>
                <th scope="row">${index + 1}</th>
                <td>${todo.id}</td>
                <td>${todo.name}</td>
                <td>
                    <button 
                        type="button" class="btn btn-danger btn-delete"
                        data-id=${todo.id}
                    >
                        Xóa
                    </button>
                </td>
            </tr>
        `;
    }).join("");
    const tableTodo = document.getElementById("table-todo");
    tableTodo.innerHTML = html;
};
saveBtn?.addEventListener("click", (e) => {
    e.target.blur();
    handleSaveTodo();
    handleCloseModal();
    showToastMessage("create-toast");
});
renderTable();
// const delBtns = document.querySelectorAll(".btn-delete") as NodeListOf<HTMLButtonElement>;
// delBtns.forEach((btn, index) => {
//     const id = btn.getAttribute("data-id");
//     if(!id) return;
//     btn.addEventListener("click", () => handleDelTodo(Number(id), btn));
// });
const tableTodo = document.getElementById("table-todo");
const showToastMessage = (id) => {
    const toastElement = document.getElementById(id);
    if (!toastElement)
        return;
    //@ts-ignore
    const toast = new bootstrap.Toast(toastElement);
    toast.show();
};
tableTodo.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("btn-delete")) {
        const id = target.getAttribute("data-id");
        if (!id)
            return;
        handleDelTodo(Number(id), target);
        showToastMessage("delete-toast");
    }
});
