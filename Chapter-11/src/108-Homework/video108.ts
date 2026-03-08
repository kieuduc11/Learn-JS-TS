export {};

interface IBlogs {
    id: number;
    title: string;
    author: string;
    content: string;
};

const fetchApi = async() => {
    const res = await fetch("http://localhost:8000/blogs");
    const data = await res.json() as IBlogs[];
    return data;
};

const renderTable = async() => {
    const tableElement = document.querySelector("#blogs tbody") as HTMLTableSectionElement;

    const blogsData = await fetchApi();
    const html = blogsData.map((blog, index) => {
        return `
            <tr>
                <td>${blog.id}</td>
                <td>${blog.title}</td>
                <td>${blog.author}</td>
                <td>${blog.content}</td>
            </tr>
        `
    });

    tableElement.innerHTML = html.join("");
};

renderTable();