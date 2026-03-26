interface IPost {
    title: string;
    content: string;
    id: number;
};

const fetchPost = async () => {
    const res = await fetch("http://localhost:8000/posts");
    const dataPost = await res.json();
    return dataPost;
};

const renderTable = async () => {
    const dataPost = await fetchPost() as IPost[];
    const tablePost = document.querySelector("#tablePost tbody") as HTMLTableSectionElement;

    const html = dataPost.map((post, index) => {
        return `
            <tr>
                <th scope="row">${post.id}</th>
                <td>${post.title}</td>
                <td>${post.content}</td>
                <td>
                    <button class="btn btn-warning editPostBtn" data-id="${post.id}" data-bs-toggle="modal" data-bs-target="#updatePostModal">Edit</button>
                    <button class="btn btn-danger deletePostBtn" data-id="${post.id}">Delete</button>
                </td>
            </tr>    
        `;
    }).join("");
    tablePost.innerHTML = html;
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

const handleFillInput = async (idPost: number) => {
    const res = await fetch(`http://localhost:8000/posts/${idPost}`);
    const post = await res.json() as IPost;

    (document.getElementById("titleInput1") as HTMLInputElement).value = post.title;
    (document.getElementById("contentInput1") as HTMLInputElement).value = post.content;
};

export {IPost, renderTable, handleCloseModal, handleShowToast, handleFillInput};