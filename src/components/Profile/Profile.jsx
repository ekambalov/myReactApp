import React from 'react'
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props)=>{
    console.log('vos')
    return (
        <main className={classes.container}>
        
          <ProfileInfo />
          <MyPostsContainer store={props.store} />
      </main>
    )
}

export default Profile;