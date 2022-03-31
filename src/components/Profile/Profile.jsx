import React from 'react'
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props)=>{

    return (
        <main className={classes.container}>
        

          <ProfileInfo />
          <MyPosts newPostText={props.data.newPostText} data={props.data.postData} addPost={props.addPost} 
          updateNewPostChange={props.updateNewPostChange} />
      </main>
    )
}

export default Profile;