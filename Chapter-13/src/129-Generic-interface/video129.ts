export {};

interface IUser {
    id: number;
    name: string;
    email: string;
};

interface IAPIResponse<T> {
    status: number;
    data: T;
};

const fetchUserData = async() => {
    const res = await fetch("http://localhost:8000/users");
    const dataAPI = await res.json() as IUser[]; 

    const result: IAPIResponse<IUser[]> = {
        status: 200,
        data: dataAPI
    };
    console.log(result);
};

fetchUserData();
