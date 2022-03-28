import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
    let posts = props.data
        .map(data => <Post message={data.message} likes={data.likesCounter} />)
    return(
        <div> 
            <div className={classes.input_wrapper}>
                <h2 className={classes.title}>My Posts</h2>
                <textarea   placeholder='your news' className={classes.input}/>
                <button className={classes.button}>send</button>
            </div>
            {posts}
        </div>
    );
}

export default MyPosts;