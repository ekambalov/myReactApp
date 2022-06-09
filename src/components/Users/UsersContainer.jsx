import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { follow, getUsers, setCurrentPage, unfollow } from "../../redux/usersReducer";
import {
  getCurrentPage,
  getFollowinInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsersData,
} from "../../redux/usersSelectors";
import Preloader from "../common/Preloader/Preloader";
import Users from "./Users";
// import UsersAPIComponent from './UsersAPIComponent';

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          currentPage={this.props.currentPage}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          onPageChanged={this.onPageChanged}
          followinInProgress={this.props.followinInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsersData(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followinInProgress: getFollowinInProgress(state),
  };
};

export default compose(connect(mapStateToProps, { setCurrentPage, getUsers, follow, unfollow }))(UsersAPIComponent);
