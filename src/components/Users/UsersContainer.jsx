import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC } from '../../redux/usersReducer';
import Users from './Users';

let mapStateToProps = (state) => { 
    return {
        users: state.usersPage.users
    }
} 

let mapDispatchToProps = (dispatch) =>{
    return {
        follow: (userID) => {dispatch(followAC(userID))
        },
        unfollow: (userID) => dispatch(unfollowAC(userID)),
        setUsers: (users) => {dispatch(setUsersAC(users))
        console.log('set')}
    }
}
const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);

export default UsersContainer;