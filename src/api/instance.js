import * as axios from "axios";

export const instance = axios.create({
    withCredentials: true, baseURL: 'https://social-network.samuraijs.com/api/1.0/', headers: {
        "API-KEY": "a42c1bf9-2b8b-4111-8e81-a9dbedcc6047"
    }
})