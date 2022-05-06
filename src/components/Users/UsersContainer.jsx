import { connect } from 'react-redux';
import { followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, toggleIsFetchingAC, unfollowAC } from '../../redux/usersReducer';
import UsersAPIComponent from './UsersAPIComponent';

let mapStateToProps = (state) => { 
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
} 

let mapDispatchToProps = (dispatch) =>{
    return {
        follow: (userID) => {dispatch(followAC(userID))
        },
        unfollow: (userID) => dispatch(unfollowAC(userID)),
        setUsers: (users) => dispatch(setUsersAC(users)),
        setCurrentPage: (page) => dispatch(setCurrentPageAC(page)),
        setTotalCount: (totalCount) => dispatch(setTotalCountAC(totalCount)),
        toggleIsFetching: (isFetching) => dispatch(toggleIsFetchingAC(isFetching))
    } 
}
const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;