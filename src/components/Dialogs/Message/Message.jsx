import React from 'react';
import classes from './../Dialogs.module.css'

const Message = (props)=>{
    return <p className={classes.message__item}>{props.message}</p>;
}



export default Message;