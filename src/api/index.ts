import axios from "axios";

const client = axios.create({
    // baseURL: "https://packunpack.herokuapp.com",
    baseURL: "http://localhost:8080/https://packunpack.herokuapp.com",
});

export default client;
