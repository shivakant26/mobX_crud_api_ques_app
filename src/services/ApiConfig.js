import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;
const apiUrl1 = process.env.REACT_APP_API_URL_PAPER

const instanse = axios.create({
    baseURL:apiUrl
})

export default instanse;

export const instansePaper = axios.create({
    baseURL:apiUrl1,
    headers:{
        "Content-Type":"application/json"
    }
})
