const fetchData = async () => {
  const res = await fetch("http://localhost:8000/users");
  const data = await res.json();
  return data;
};

const renderTable = async () => {
  const userData = await fetchData();

  const tableBody = document.getElementById("tableBody");

  const html = userData.map((data, index) => {
    return `<tr><td>${data.id}</td><td>${data.name}</td><td>${data.email}</td></tr>`;
  });

  tableBody.innerHTML = html.join("");
};

renderTable();
