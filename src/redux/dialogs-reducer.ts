const ADD_MESSAGE = "ADD_MESSAGE"

type dialogsNameType = {
    id: number,
    name: string
}

type dialogsMessageType = {
    id: number,
    message: string
}

let initialState = {
    dialogsName: [
        {id: 1, name: 'Дмитрий Л.'},
        {id: 2, name: 'Олег К'},
        {id: 3, name: 'Константин Б.'},
        {id: 4, name: 'Егор К.'},
        {id: 5, name: 'Александр А.'},
        {id: 6, name: 'Ольга П.'},
        {id: 7, name: 'Елена У.'},
        {id: 8, name: 'Владимир М.'},
        {id: 9, name: 'Павел Е.'},
        {id: 10, name: 'Вероника В.'}
    ] as Array<dialogsNameType>,
    dialogsMessage: [
        {id: 1, message: "Привет! Как у тебя дела?"},
        {id: 2, message: "Привет! Отлично! А у тебя?"},
        {id: 3, message: "И у меня все хорошо"},
        {id: 4, message: "Это хорошо, что хорошо"}
    ] as Array<dialogsMessageType>
}

export type initialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): initialStateType =>{

    switch(action.type) {
        case ADD_MESSAGE:
            let newMessageText = {
                id: 5,
                message: action.newMessage
            };
            return {
                ...state,
                dialogsMessage: [...state.dialogsMessage, newMessageText]
            }
            break;
    }
    return state;
}

type addMessageType = {
    type: typeof ADD_MESSAGE,
    newMessage: string
}

export const addMessage = (newMessage: string): addMessageType =>{
    return{
        type: ADD_MESSAGE,
        newMessage
    }
}

export default dialogsReducer;