const handleDelTodo = (idTodo, btn) => {
    const todoListStr = localStorage.getItem("todoList");
    const todoListArr = todoListStr ? JSON.parse(todoListStr) : [];
    const newTodoListArr = todoListArr.filter((todo, index) => {
        return todo.id !== idTodo;
    });
    localStorage.setItem("todoList", JSON.stringify(newTodoListArr));
    const row = btn.closest("tr");
    row?.remove();
};
export { handleDelTodo };
