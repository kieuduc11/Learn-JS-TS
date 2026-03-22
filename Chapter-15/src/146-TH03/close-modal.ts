const handleCloseModal = () => {
    const createTodoModal = document.getElementById("createTodoModal");
    if (createTodoModal) {
        //@ts-ignore
        const myModal = bootstrap.Modal.getOrCreateInstance(createTodoModal, {
            keyboard: false
        });
        myModal.hide();
    };
};

export {handleCloseModal};