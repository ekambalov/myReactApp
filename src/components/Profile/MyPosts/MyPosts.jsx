import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    let posts = props.data
        .map(data => <Post message={data.message} likes={data.likesCounter} />)

    let newElement = React.createRef()

     const addPost = ()=>{
         let text = newElement.current.value;
         props.addPost(text);
     }

    return(
        <div> 
            <div className={classes.input_wrapper}>
                <h2 className={classes.title}>My Posts</h2>
                <textarea ref={newElement}  placeholder='your news' className={classes.input}/>
                <button onClick={addPost} className={classes.button}>send</button>
            </div>
            {posts}
        </div>
    );
}

export default MyPosts;