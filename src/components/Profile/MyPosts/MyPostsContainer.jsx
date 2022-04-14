import React from 'react';
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {
    let addPost = ()=>{
        props.store.dispatch(addPostActionCreator());
    }
    
    let onPostChange = (text) =>{
        props.store.dispatch(onPostChangeActionCreator(text));
    }
    let store = props.store.getState();
    return(
        <MyPosts  newPostText={store.profilePage.newPostText} 
        data={store.profilePage.postData}  
        updateNewPostChange= {onPostChange} 
        addPost={addPost} />
    );
}

export default MyPostsContainer;