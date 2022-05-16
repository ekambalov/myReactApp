import { UsersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_MY_ID = 'SET-MY-ID';


const initialState = {
    postData: [
        {id:0, message:"fuck you, russian warship!", likesCounter:1337},
        {id:1, message:"Hellow, world", likesCounter:10},
        {id:2, message:"It's my first post", likesCounter:0},
        {id:3, message:"fuck fuck", likesCounter:0},
        {id:4, message:"fuck", likesCounter:0}
    ],
    newPostText: '',
    profile: null,
    myId: null
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
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }    
        case SET_MY_ID:
            return {
                ...state,
                myId: action.myId
            }    
        default:
            return state;
    }

}

export const addPostActionCreator = () =>  ({type: ADD_POST});
export const onPostChangeActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setMyId = (myId) => ({type: SET_MY_ID, myId})

export const getMyId = (myId) => {
    return (dispatch) => {
        UsersAPI.getAuth().then(data => {
            if(data.resultCode === 0){
                dispatch(setMyId(data.data.id));
                console.log(data.data.id)
            }
    })
}}
export const getProfile = (userId) => {
    return (dispatch) => {
        UsersAPI.getProfile(userId).then(data => {
            if(data.resultCode === 0){
           dispatch(setUserProfile(data));
            }
          })
}}



export default profileReducer;