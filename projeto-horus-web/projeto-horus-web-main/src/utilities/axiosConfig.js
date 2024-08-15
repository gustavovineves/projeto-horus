import axios from "axios";


// const localPath = 'http://localhost:8080/'
export const Api = axios.create({
    // url base
    baseURL: 'https://horusapi.onrender.com/'
})