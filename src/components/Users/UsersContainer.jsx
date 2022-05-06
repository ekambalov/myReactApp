import { connect } from 'react-redux';
import { follow, setCurrentPage, setTotalCount, setUsers, toggleIsFetching, unfollow } from '../../redux/usersReducer';
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


const UsersContainer = connect(mapStateToProps,{
    follow, unfollow, setUsers, setCurrentPage, setTotalCount, toggleIsFetching
})(UsersAPIComponent);

export default UsersContainer;