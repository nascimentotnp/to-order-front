import axios from "axios";


const BASE_URL = "http://localhost:8080";


const request = (params) => {
    return axios({
        ...params,
        baseURL: BASE_URL,
    });
};


export default request;