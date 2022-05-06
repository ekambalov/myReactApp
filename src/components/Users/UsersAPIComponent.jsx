import * as axios from 'axios';
import React from 'react';
import Users from './Users';
import preloader from '../../assets/img/preloader.svg'
import Preloader from '../common/Preloader/Preloader';

class UsersAPIComponent extends React.Component {

    constructor(props) {
        super(props);



    }

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
    
            }) 
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);    
            this.props.setUsers(response.data.items)
    
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