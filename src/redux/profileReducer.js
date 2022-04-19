const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


const initialState = {
    postData: [
        {id:0, message:"fuck you, russian warship!", likesCounter:1337},
        {id:1, message:"Hellow, world", likesCounter:10},
        {id:2, message:"It's my first post", likesCounter:0},
        {id:3, message:"fuck fuck", likesCounter:0},
        {id:4, message:"fuck", likesCounter:0}
    ],
    newPostText: ''
}

const profileReducer = (state = initialState,action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.postData.length + 1,
                message: state.newPostText,
                likesCounter: 0
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''            
            };
        
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostText
            }    
        default:
            return state;
    }

}

export const addPostActionCreator = () => {
    return {type: ADD_POST};
}

export const onPostChangeActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newPostText: text}
}

export default profileReducer;