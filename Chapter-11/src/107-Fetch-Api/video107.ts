export {};

interface IUser {
    id: number;
    name: string;
    email: string;
};

const fetchApi = async() => {
    const res = await fetch("http://localhost:8000/users");
    const data = await res.json() as IUser[];
    console.log(data[0].name);
};

fetchApi();