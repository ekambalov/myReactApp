const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';


const initialState = {
    users : [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {   
        case FOLLOW:
            return {...state, 
                users: state.users.map(u => {
                    if(u.id===action.userID)
                    return {
                        ...u, followed: true
                    }
                    return u;
                })}
        case UNFOLLOW:
            return {...state, 
                users: state.users.map(u => {
                    if(u.id===action.userID)
                    return {
                        ...u, followed: false
                    }
                    return u;
                })}
        case SET_USERS:
            return {
                ...state, users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_COUNT:
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
                
        default:
            return state;
    }

}


export const followAC = (userID) => {
    return {type: FOLLOW, userID}
}

export const unfollowAC = (userID) =>{
    return {type: UNFOLLOW, userID}
}

export const setUsersAC = (users) =>{
    return {type: SET_USERS, users}
}
export const setCurrentPageAC = (page) =>{
    return {type: SET_CURRENT_PAGE, currentPage: page}
}
export const setTotalCountAC = (totalUsersCount) =>{
    return {type: SET_TOTAL_COUNT, totalUsersCount}
}



export default usersReducer;