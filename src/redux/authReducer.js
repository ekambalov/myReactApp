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
                ...action.payload,
                isAuth: true
            }        
        default:
            return state;
    }

}


export const setAuthUserData = (userId, email, login, isAuth) =>  ({type: SET_USER_DATA, payload: {userId, email, login}, isAuth})

export const getAuth = () => {
    return (dispatch) => {
        UsersAPI.getAuth().then(data => {
                
            if(data.resultCode === 0){
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login, true))
            }
            
                })
    }
}

export const login = (data) => {
    return (dispatch) => {
        console.log('click')
        loginAPI.login(data.login, data.password, data.remeberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuth())
            }
        })
    }
}
export const logout = (data) => {
    return (dispatch) => {
        loginAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
    }
}



export default authReducer;