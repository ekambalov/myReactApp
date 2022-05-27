import { loginAPI, UsersAPI } from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';


const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {   
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }        
        default:
            return state;
    }

}


export const setAuthUserData = (userId, email, login) =>  ({type: SET_USER_DATA, data: {userId, email, login}})

export const getAuth = () => {
    return (dispatch) => {
        UsersAPI.getAuth().then(data => {
                
            if(data.resultCode === 0){
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login))
            }
            
                })
    }
}

export const pushLoginData = (data) => {
    return (dispatch) => {
        loginAPI.pushLoginData(data.login, data.password, data.remeberMe)
    }
}



export default authReducer;