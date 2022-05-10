import React from 'react';
import classes from './Post.module.css';
import defaluteAvatar from '../../../../assets/img/defalut-avatar.webp';

const Post = (props) => {
    return(
            <div className={classes.item}>
              <img src={props.avatar ? props.avatar : defaluteAvatar} alt="avatar" className={classes.item__avatar} />
               <span className={classes.item__text}>{props.message}</span> 
               <p className={classes.likes}> {props.likes} likes</p>
            </div>
    );
}

export default Post;