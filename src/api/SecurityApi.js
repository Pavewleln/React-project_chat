import {instance} from "./instance";

export const SecurityApi ={
    getCaptchaUrl(){
        return instance.get(`security/get-captcha-url`)
    }
}