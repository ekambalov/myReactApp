import { connect } from 'react-redux';
import { follow, getUsers, setCurrentPage, unfollow } from '../../redux/usersReducer';
import UsersAPIComponent from './UsersAPIComponent';

let mapStateToProps = (state) => { 
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followinInProgress: state.usersPage.followinInProgress
    }
} 



const UsersContainer = connect(mapStateToProps,{
     setCurrentPage,   
    getUsers, follow, unfollow
})(UsersAPIComponent);

export default UsersContainer;