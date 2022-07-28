import {instance} from "./instance";

export const UsersApi = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },

    onPageChangedApi(pageNumber, pageSize) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    unfollowApi(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    followApi(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },

}



