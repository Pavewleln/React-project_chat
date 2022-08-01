export const requiredField = value =>{
    if(value){
        return undefined;
    }else{
        return "error"
    }
}
export const maxLengthCreator = (maxLength) => (value) =>{
    if(value && value.length > maxLength){
        return `max length more ${maxLength}`
    }else{
        return undefined
    }
}