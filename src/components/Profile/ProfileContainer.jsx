import React from 'react'
import { connect } from 'react-redux';
import {  useLocation, useNavigate, useParams } from 'react-router-dom';
import { UsersAPI } from '../../api/api';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
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


let authRedurectComponent = withAuthRedirect(ProfileContainer)



let mapStateToProps = (state) => ({ 

  profile: state.profilePage.profile,
  myId: state.profilePage.myId

}) 

let WithURLDataContainerCopmponent = withRouter(authRedurectComponent)

export default connect(mapStateToProps,{setUserProfile, setMyId, getMyId})(WithURLDataContainerCopmponent);