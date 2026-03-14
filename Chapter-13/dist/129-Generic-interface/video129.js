;
;
const fetchUserData = async () => {
    const res = await fetch("http://localhost:8000/users");
    const dataAPI = await res.json();
    const result = {
        status: 200,
        data: dataAPI
    };
    console.log(result);
};
fetchUserData();
export {};
