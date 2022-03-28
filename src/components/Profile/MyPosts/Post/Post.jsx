import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
    return(
            <div className={classes.item}>
              <img src="https://pbs.twimg.com/profile_images/1443530080387571712/Go90yw4N_400x400.jpg" alt="avatar picture" className={classes.item__avatar} />
               <span className={classes.item__text}>{props.message}</span> 
               <p className={classes.likes}> {props.likes} likes</p>
            </div>
    );
}

export default Post;