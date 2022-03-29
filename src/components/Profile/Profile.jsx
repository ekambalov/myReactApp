import React from 'react'
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props)=>{

    return (
        <main className={classes.container}>
        

          <ProfileInfo />
          <MyPosts data={props.data.postData} addPost={props.addPost} />
      </main>
    )
}

export default Profile;