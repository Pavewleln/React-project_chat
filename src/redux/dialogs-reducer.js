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
    ],
    dialogsMessage: [
        {id: 1, message: "Привет! Как у тебя дела?"},
        {id: 2, message: "Привет! Отлично! А у тебя?"},
        {id: 3, message: "И у меня все хорошо"},
        {id: 4, message: "Это хорошо, что хорошо"}
    ],
    newMessage: 'yes'
}

const dialogsReducer = (state = initialState, action) =>{

    switch(action.type) {
        case("AddMessage"):
            let newMessageText = {
                id: 5,
                message: state.newMessage
            };
            return {
                ...state,
                // messages: [...state.messages],
                dialogsMessage: [...state.dialogsMessage, newMessageText],
                newMessage: '',
            }
            break;
        case("UpdateNewMessage"):
            return {
                ...state,
                newMessage: action.newText
            }
            break;
    }
    return state;
}

export const AddMessageActiveCreator = () =>{
    return{
        type:'AddMessage'
    }
}

export const UpdateNewMessage = (text) =>{
    return{
        type:'UpdateNewMessage',
        newText: text
    }
}

export default dialogsReducer;