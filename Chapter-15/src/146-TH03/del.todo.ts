import { ITodo } from "./interface.todo";

const handleDelTodo = (idTodo: number, btn: HTMLButtonElement) => {
    const todoListStr = localStorage.getItem("todoList");
    const todoListArr: ITodo[] = todoListStr ? JSON.parse(todoListStr) : [];

    const newTodoListArr = todoListArr.filter((todo, index) => {
        return todo.id !== idTodo;
    });

    localStorage.setItem("todoList" ,JSON.stringify(newTodoListArr));

    const row = btn.closest("tr");
    row?.remove();
};

export {handleDelTodo};