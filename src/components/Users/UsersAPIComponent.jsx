// import React from 'react';
// import Users from './Users';
// import Preloader from '../common/Preloader/Preloader';

// class UsersAPIComponent extends React.Component {

    

//     componentDidMount() {
//      this.props.getUsers(this.props.currentPage, this.props.pageSize);

//      }

//     onPageChanged = (pageNumber) => {
//         this.props.setCurrentPage(pageNumber);
//         this.props.getUsers(pageNumber, this.props.pageSize);
//     }

//     render() {
//         return <>
//         {this.props.isFetching ? <Preloader/> : null}
//          <Users currentPage={this.props.currentPage}
//                         totalUsersCount  = {this.props.totalUsersCount} 
//                         pageSize  = {this.props.pageSize}
//                         users = {this.props.users}
//                         follow = {this.props.follow}
//                         unfollow = {this.props.unfollow}
//                         onPageChanged ={this.onPageChanged}
//                         followinInProgress = {this.props.followinInProgress}
//         />
//         </>
//     }
// }

// export default UsersAPIComponent;