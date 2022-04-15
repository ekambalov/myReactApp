import React from 'react';
import DialogsItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css'
import Message from './Message/Message';
import MessageInputContainer from './MessageInput/MessageInputContainer';





const Dialogs = (props) => {



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