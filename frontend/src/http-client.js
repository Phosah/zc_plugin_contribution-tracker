import axios from 'axios';

export default axios.create({
    baseURL: "https://ct.zuri.chat/api/v1/",
    headers: {
        Accept: 'application/json',
        "Content-type": "application/json"
    },
    timeout: 300000
})