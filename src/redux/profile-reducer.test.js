import profileReducer, {addPost, deletePost} from "./profile-reducer";

let state = {
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
    ]
};

test('length of posts should be incremented', () => {

    let action = addPost("Работает")
    let newState = profileReducer(state, action);
    expect (newState.posts.length).toBe(4)
});
test('message of new post should be correct', () => {

    let action = addPost("Работает")
    let newState = profileReducer(state, action);
    expect (newState.posts[3].message).toBe("Работает")
});
test('after deleting length of messages should be decrement', () => {

    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect (newState.posts.length).toBe(2)
});