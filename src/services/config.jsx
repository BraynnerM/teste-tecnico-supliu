import axios from "axios";

const apiFetch = axios.create({
    baseURL: "https://tiao.supliu.com.br/api",
    headers: {
        'Content-type': 'application/json',
        'Authorization': 'braynnermarques@hotmail.com'
    }

});

export default apiFetch;