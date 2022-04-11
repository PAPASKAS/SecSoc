import Axios from 'axios'
import * as https from "https";

Axios.defaults.httpsAgent = new https.Agent({
    rejectUnauthorized: false
})

const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
})

export default axios
