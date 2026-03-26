interface IUser {
    name: string;
    email: string;
    id: number;
};

const fetchUser = async () => {
    const res = await fetch("http://localhost:8000/users");
    const dataUser = await res.json();
    return dataUser;
};

const renderTable = async () => {
    const dataUser = await fetchUser() as IUser[];
    const tableUser = document.querySelector("#tableUser tbody") as HTMLTableSectionElement;

    const html = dataUser.map((user, index) => {
        return `
            <tr>
                <th scope="row">${user.id}</th>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>
                    <button class="btn btn-warning editUserBtn" data-id="${user.id}" data-bs-toggle="modal" data-bs-target="#updateUserModal">Edit</button>
                    <button class="btn btn-danger deleteUserBtn" data-id="${user.id}">Delete</button>
                </td>
            </tr>    
        `;
    }).join("");
    tableUser.innerHTML = html;
};

const handleCloseModal = (idModal: string) => {
    const modalElement = document.getElementById(idModal);
    if (!modalElement) return;
    //@ts-ignore
    const modal = bootstrap.Modal.getInstance(modalElement);
    modal?.hide();
};

const handleShowToast = (idToast: string) => {
    const toastElement = document.getElementById(idToast);
    if (!toastElement) return;
    //@ts-ignore
    const toast = new bootstrap.Toast(toastElement);
    toast.show();
};

const handleFillInput = async (idUser: number) => {
    const res = await fetch(`http://localhost:8000/users/${idUser}`);
    const user = await res.json() as IUser;
    (document.getElementById("nameInput1") as HTMLInputElement).value = user.name;
    (document.getElementById("emailInput1") as HTMLInputElement).value = user.email;
};

export { IUser, renderTable, handleCloseModal, handleShowToast, handleFillInput };