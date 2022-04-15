import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = (props) => {
    let posts = props.data
        .map(data => <Post message={data.message} likes={data.likesCounter} />)
    let newElement = React.createRef()

    const onAddPost = ()=>{
        props.addPost()
    }

    const onPostChange = () =>{
        let text = newElement.current.value
        props.updateNewPostChange(text);
    }

    return(
        <div> 
            <div className={classes.input_wrapper}>
                <h2 className={classes.title}>My Posts</h2>
                <textarea ref={newElement} 
                onChange={onPostChange} 
                placeholder='your news' 
                className={classes.input} 
                value={props.newPostText} />

                <button onClick={onAddPost} className={classes.button}>send</button>
            </div>
            <div className={classes.posts_wrapper}>
            {posts}

            </div>
        </div>
    );
}

export default MyPosts;