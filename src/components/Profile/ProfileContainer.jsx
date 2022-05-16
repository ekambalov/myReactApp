import React from 'react'
import { connect } from 'react-redux';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import { UsersAPI } from '../../api/api';
import { getMyId, setMyId, setUserProfile } from '../../redux/profileReducer';
import Profile from './Profile';


class ProfileContainer extends React.Component {


  componentDidMount() {

        this.props.getMyId()
          
        
        
        let userId = this.props.router.params.userId;

        if (!userId) userId = this.props.myId;
        UsersAPI.getProfile(userId).then(data => {
          this.props.setUserProfile(data);
        }) 
  }

  render() { 
    if (!this.props.isAuth) return <Navigate to='/login'/>
    return <Profile {...this.props} profile={this.props.profile} />
  }
} 


function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }
  return ComponentWithRouterProp;
}

let mapStateToProps = (state) => ({ 

  profile: state.profilePage.profile,
  myId: state.profilePage.myId,
  isAuth: state.auth.isAuth

}) 

let WithURLDataContainerCopmponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,{setUserProfile, setMyId, getMyId})(WithURLDataContainerCopmponent);