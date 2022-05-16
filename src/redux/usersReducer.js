import { UsersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';


const initialState = {
    users : [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followinInProgress: []
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
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, 
                followinInProgress: action.isFollowingProgress 
                    ? [...state.followinInProgress, action.userId] 
                    : [state.followinInProgress.filter(id => id !== action.userId)]
            }
                
        default:
            return state;
    }

}


// actions creators: 

export const followSuccess = (userID) => ({type: FOLLOW, userID})
export const unfollowSuccess = (userID) => ({type: UNFOLLOW, userID})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, currentPage: page})
export const setTotalCount = (totalUsersCount) => ({type: SET_TOTAL_COUNT, totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowingProgress = (isFollowingProgress, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFollowingProgress, userId})

// thunks: 

export const getUsers = (currentPage, pageSize) => {
    
    return (dispatch) => {   
        dispatch(toggleIsFetching(true));
        UsersAPI.getUsers(currentPage, pageSize).then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalCount(data.totalCount));

            }) 
    }
}
export const follow = (userId) => {
    
    return (dispatch) => {   
        dispatch(toggleIsFollowingProgress(true, userId));
        UsersAPI.follow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId));
            }                            
            dispatch(toggleIsFollowingProgress(false, userId));
        })  
    }
}
export const unfollow = (userId) => {
    
    return (dispatch) => {   
        dispatch(toggleIsFollowingProgress(true, userId));
        UsersAPI.unfollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(userId));
            }                            
            dispatch(toggleIsFollowingProgress(false, userId));
        })  

    }
}


export default usersReducer;