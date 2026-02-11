// promise
fetch("http://localhost:8000/blogs")
  .then((res) => res.json())
  .then((data) => console.log("fetch promise:", data));

// async/await
const fetchData = async() => {
    const res = await fetch("http://localhost:8000/blogs");
    const data = await res.json();
    console.log("fetch async/await:", data);
}

fetchData();