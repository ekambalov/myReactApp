import React from 'react';
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/profileReducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {
    
    //  let store = props.store.getState();
    

    return(
        <StoreContext.Consumer> 
            { (store) => {  
                    let state = store.getState();
                    let addPost = ()=> {
                        store.dispatch(addPostActionCreator());
                    }
                
                    let onPostChange = (text) =>{
                        store.dispatch(onPostChangeActionCreator(text));
                     }

                    return (
                        <MyPosts  newPostText={state.profilePage.newPostText} 
                        data={state.profilePage.postData}  
                        updateNewPostChange= {onPostChange} 
                        addPost={addPost} />
                    )
                }

            }

        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;