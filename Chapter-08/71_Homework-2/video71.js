const tableBody = document.querySelector("#tableBody");
const submitBtn = document.getElementById("submitBtn");

const fetchData = async () => {
  const res = await fetch("http://localhost:8000/blogs");
  const data = await res.json();
  return data;
};

const renderTable = async () => {
  const blogData = await fetchData();
  const html = blogData.map((item, index) => {
    return `<tr>
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td>${item.author}</td>
            <td>${item.content}</td>
            <td>
                <button 
                  class="delete-btn"
                  onClick="deleteBlog(${item.id})"
                >Xóa</button>
            </td>
        </tr> `;
  });
  tableBody.innerHTML = html.join("");
};

const postBlog = async () => {
  const titleInput = document.getElementById("titleInput");
  const authorInput = document.getElementById("authorInput");
  const contentInput = document.getElementById("contentInput");

  const rawResponse = await fetch("http://localhost:8000/blogs", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: titleInput.value,
      author: authorInput.value,
      content: contentInput.value,
    }),
  });
  const content = await rawResponse.json();
  console.log(content);

  await renderTable();
};

const deleteBlog = async (id) => {
  const rawResponse = await fetch(`http://localhost:8000/blogs/${id}`, {
    method: "DELETE",
  });
  const data = await rawResponse.json();
  console.log(data);
  await renderTable();
};

submitBtn.addEventListener("click", () => {
  postBlog();

  const titleInput = document.getElementById("titleInput");
  const authorInput = document.getElementById("authorInput");
  const contentInput = document.getElementById("contentInput");

  titleInput.value = "";
  authorInput.value = "";
  contentInput.value = "";
});

renderTable();
