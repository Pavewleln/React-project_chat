import axios from "axios";
import {instance} from "./instance";


export const HeaderApi = {
    loginApi() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    }

}
