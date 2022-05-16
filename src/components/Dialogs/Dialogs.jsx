import React from 'react';
import { Navigate } from 'react-router-dom';
import classes from './Dialogs.module.css'
import MessageInputContainer from './MessageInput/MessageInputContainer';





const Dialogs = (props) => {

if (!props.isAuth) return <Navigate to='/login' />

    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogs__items}>
                <ul className={classes.dialogs__list}>
                    {props.dialogs}
                </ul>
            </div>
            <div className={classes.message}>
                {props.messages}
                <MessageInputContainer />
            </div>
        </div>
    )
}

export default Dialogs;