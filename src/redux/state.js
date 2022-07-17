import {rerenderEntireTree} from "../render";

let state = {
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
        ]
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
        newPostText:'Работает'
    }
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likes: 0,
        dislikes: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
    state.profilePage.newPostText = '';
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state);

}

export default state;