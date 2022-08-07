import axios from "axios";
import {instance} from "./instance";


export const HeaderApi = {
    meApi() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    loginApi(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, {
            email, password, rememberMe, captcha
        })
    },
    logoutApi() {
        return instance.delete(`auth/login`)
    },
}
