import {instance} from "./instance";

export const profileApi ={
    profileInfo(id){
        return instance.get(`profile/` + id)
            .then(response => {
                return response.data
            })
    },
    getStatus(id){
        return instance.get(`profile/status/` + id)
    },
    updateStatus(status){
        return instance.put(`profile/status/`, {status: status})
    },
    savePhoto(photoFile){
        let formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
    },
}
