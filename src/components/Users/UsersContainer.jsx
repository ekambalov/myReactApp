import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { follow, getUsers, setCurrentPage, unfollow } from '../../redux/usersReducer';
import Preloader from '../common/Preloader/Preloader';
import Users from './Users';
// import UsersAPIComponent from './UsersAPIComponent';


class UsersAPIComponent extends React.Component {

    

    componentDidMount() {
     this.props.getUsers(this.props.currentPage, this.props.pageSize);

     }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
        {this.props.isFetching ? <Preloader/> : null}
         <Users currentPage={this.props.currentPage}
                        totalUsersCount  = {this.props.totalUsersCount} 
                        pageSize  = {this.props.pageSize}
                        users = {this.props.users}
                        follow = {this.props.follow}
                        unfollow = {this.props.unfollow}
                        onPageChanged ={this.onPageChanged}
                        followinInProgress = {this.props.followinInProgress}
        />
        </>
    }
}



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



export default compose(
    withAuthRedirect,
    connect(mapStateToProps,{setCurrentPage, getUsers, follow, unfollow}) 
)(UsersAPIComponent);