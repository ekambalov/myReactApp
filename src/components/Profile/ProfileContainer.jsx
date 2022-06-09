import React from "react";
import { connect } from "react-redux";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { getMyId, getProfile, getStatus, setMyId, setUserProfile, updateStatus } from "../../redux/profileReducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  state = {
    myId: this.props.myId,
  };

  componentDidMount() {
    this.props.getMyId();
    let userId = this.props.router.params.userId;

    // if (!userId) userId = this.state.myId;

    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.myId !== this.props.myId) {
      this.setState({
        status: this.props.myId,
      });
      this.render();
    }
  }

  render() {
    if (!this.props.isAuth && !this.props.router.params.userId) {
      console.log("heh");
      return <Navigate to={"/login"} />;
    }
    console.log(this.props.isAuth);
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        myId={this.state.myId}
      />
    );
  }
}

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  myId: state.profilePage.myId,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, {
    setUserProfile,
    setMyId,
    getMyId,
    getProfile,
    getStatus,
    updateStatus,
  }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer);
