import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import NavbarReducer from "./navbar-reducer";

let store = {
    _state:{
        dialogsPage: {
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
        },
        profilePage: {
            posts: [
                {
                    id: 1,
                    message: "Привет! Я зарегистрировался в новом крутом Мессенджере! Называется НеВКонтакте. Очень креативно и необычно. Никогда такого не видел",
                    likes: '23',
                    dislikes: '3'
                },
                {
                    id: 2,
                    message: "Я не сказал самое главное. Знаете кто создал это приложение на React?",
                    likes: '16',
                    dislikes: '13'
                },
                {
                    id: 3,
                    message: "Я",
                    likes: '100',
                    dislikes: '0'
                }
            ],
            newPostText:'yes'
        },
        navbar:{},
    },
    getState(){
        return this._state;
    },
    _rerenderEntireTree(){
        console.log('hey')
    },
    subscribe(observer){
        this._rerenderEntireTree = observer;
    },
    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.navbar = NavbarReducer(this._state.navbar, action)
        this._rerenderEntireTree(this._state);
    }
}

