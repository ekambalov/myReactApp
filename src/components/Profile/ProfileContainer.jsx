import axios from 'axios';
import React from 'react'
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { setUserProfile } from '../../redux/profileReducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {


  componentDidMount() {

        let myId;
        
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true} ).then(response => {
          if(response.data.resultCode === 0){
            myId = response.data.data.id;
          }
          
        
        
        let userId = this.props.router.params.userId;
        if (!userId) userId = myId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
                this.props.setUserProfile(response.data);
    
            }) }) 
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

let mapStateToProps = (state) => ({ 

  profile: state.profilePage.profile

}) 

let WithURLDataContainerCopmponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,{setUserProfile})(WithURLDataContainerCopmponent);