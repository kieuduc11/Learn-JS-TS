;
const fetchBlog = async () => {
    const res = await fetch("http://localhost:8000/blogs");
    const dataBlog = await res.json();
    return dataBlog;
};
const renderTable = async () => {
    const dataBlog = await fetchBlog();
    const tableBlog = document.querySelector("#tableBlog tbody");
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
const handleCloseModal = (idModal) => {
    const modalElement = document.getElementById(idModal);
    if (!modalElement)
        return;
    //@ts-ignore
    const modal = bootstrap.Modal.getInstance(modalElement);
    modal?.hide();
};
const handleShowToast = (idToast) => {
    const toastElement = document.getElementById(idToast);
    if (!toastElement)
        return;
    //@ts-ignore
    const toast = new bootstrap.Toast(toastElement);
    toast.show();
};
const handleFillInput = async (idBlog) => {
    const res = await fetch(`http://localhost:8000/blogs/${idBlog}`);
    const blog = await res.json();
    document.getElementById("titleInput1").value = blog.title;
    document.getElementById("authorInput1").value = blog.author;
    document.getElementById("contentInput1").value = blog.content;
};
export { renderTable, handleCloseModal, handleShowToast, handleFillInput };
