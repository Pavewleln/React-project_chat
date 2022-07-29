import {instance} from "./instance";

export const profileApi ={
    profileInfo(id){
        return instance.get(`profile/` + id)
            .then(response => {
                return response.data
            })
    }
}
