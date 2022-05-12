import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { getUsers, UsersAPI } from '../../api/api';

class UsersAPIComponent extends React.Component {

    

    componentDidMount() {
        this.props.toggleIsFetching(true);
        UsersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalCount(data.totalCount);
    
            }) 
    }

    onPageChanged = (pageNumber) => {
        
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        UsersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);    
            this.props.setUsers(data.items)
    
            }) 
    }

    render() {
        return <>
        {this.props.isFetching ? <Preloader/> : null}
         <Users currentPage={this.props.currentPage}
                        totalUsersCount  = {this.props.totalUsersCount} 
                        pageSize  = {this.props.pageSize}
                        users = {this.props.users}
                        unfollow = {this.props.unfollow}
                        follow = {this.props.follow}
                        onPageChanged ={this.onPageChanged}
        />
        </>
    }
}

export default UsersAPIComponent;