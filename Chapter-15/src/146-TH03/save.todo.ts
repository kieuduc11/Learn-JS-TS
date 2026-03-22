import { getRandomInt } from "./helper.js";
import { ITodo } from "./interface.todo.js";

const handleSaveTodo = () => {
    const inputTodo = document.getElementById("todo-input") as HTMLInputElement;
    if (!inputTodo) return;

    const newTodo: ITodo = {
        id: getRandomInt(1, 999999),
        name: inputTodo.value
    };

    const todoListStr = localStorage.getItem("todoList");
    const todoListArr: ITodo[] = todoListStr ? JSON.parse(todoListStr) : [];

    todoListArr.push(newTodo);
    localStorage.setItem("todoList", JSON.stringify(todoListArr));
    inputTodo.value = "";
    
    const newRow = document.createElement("tr");
    const todoListLength = todoListArr.length;
    newRow.innerHTML = `
        <th scope="row">${todoListLength}</th>
            <td>${newTodo.id}</td>
            <td>${newTodo.name}</td>
            <td>
            <button 
                type="button" class="btn btn-danger btn-delete"
                data-id=${newTodo.id}
            >
                Xóa
            </button>
        </td>
    `;

    const tableTodo = document.getElementById("table-todo") as HTMLTableElement;
    tableTodo.appendChild(newRow);
};

export {handleSaveTodo};