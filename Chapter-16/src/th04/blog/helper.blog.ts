interface IBlog {
    title: string;
    author: string;
    content: string;
    id: number;
};

const fetchBlog = async () => {
    const res = await fetch("http://localhost:8000/blogs");
    const dataBlog = await res.json();
    return dataBlog;
};

const renderTable = async () => {
    const dataBlog = await fetchBlog() as IBlog[];
    const tableBlog = document.querySelector("#tableBlog tbody") as HTMLTableSectionElement;

    const html = dataBlog.map((blog, index) => {
        return `
            <tr>
                <th scope="row">${blog.id}</th>
                <td>${blog.title}</td>
                <td>${blog.author}</td>
                <td>${blog.content}</td>
                <td>
                    <button class="btn btn-warning editBlogBtn" data-id="${blog.id}" data-bs-toggle="modal" data-bs-target="#updateBlogModal">Edit</button>
                    <button class="btn btn-danger deleteBlogBtn" data-id="${blog.id}">Delete</button>
                </td>
            </tr>    
        `;
    }).join("");
    tableBlog.innerHTML = html;
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

const handleFillInput = async (idBlog: number) => {
    const res = await fetch(`http://localhost:8000/blogs/${idBlog}`);
    const blog = await res.json() as IBlog;

    (document.getElementById("titleInput1") as HTMLInputElement).value = blog.title;
    (document.getElementById("authorInput1") as HTMLInputElement).value = blog.author;
    (document.getElementById("contentInput1") as HTMLInputElement).value = blog.content;
};

export { IBlog, renderTable, handleCloseModal, handleShowToast, handleFillInput };