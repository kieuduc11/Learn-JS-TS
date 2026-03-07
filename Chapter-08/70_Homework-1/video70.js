const todoInput = document.getElementById("todoInput");
const btnSave = document.getElementById("btnSave");
const tableBody = document.getElementById("tableBody");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const dataTodoStr = localStorage.getItem("todo");
const dataTodo = JSON.parse(dataTodoStr);

const handleSubmit = () => {
  const currentTodo = {
    id: getRandomInt(1, 1000000000),
    name: todoInput.value,
  };

  if (!dataTodoStr) {
    localStorage.setItem("todo", JSON.stringify([currentTodo]));
  } else {
    dataTodo.push(currentTodo);
    localStorage.setItem("todo", JSON.stringify(dataTodo));
  }

  window.location.href = "index.html";
};

if (btnSave) {
  btnSave.addEventListener("click", handleSubmit);
}

if (dataTodo) {
  const html = dataTodo.map((item, index) => {
    return `<tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>
                <button class="deleteBtn" data-id=${item.id}>Xóa</button>
            </td>
        </tr>`;
  });

  if (tableBody) {
    tableBody.innerHTML = html.join("");

    const deleteBtns = document.querySelectorAll(".deleteBtn");

    deleteBtns.forEach((deleteBtn, index) => {
      deleteBtn.addEventListener("click", () => {
        const id = Number(deleteBtn.getAttribute("data-id"));
        const newDataTodo = dataTodo.filter((item, index) => {
          return item.id !== id;
        });
        localStorage.setItem("todo", JSON.stringify(newDataTodo));
        window.location.reload();
      });
    });
  }
}
