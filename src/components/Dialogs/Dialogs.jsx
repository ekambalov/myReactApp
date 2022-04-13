import React from 'react';
import DialogsItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css'
import Message from './Message/Message';
import MessageInput from './MessageInput/MessageInput';





const Dialogs = (props) => {


let dialogs = props.data.dialogsData
    .map( element => <DialogsItem id={element.id} name={element.name}/>);
let messages = props.data.messagesData
    .map( element =><Message message={element.message} id={element.id} />);

    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogs__items}>
                <ul className={classes.dialogs__list}>
                    {dialogs}
                </ul>
            </div>
            <div className={classes.message}>
                {messages}
                <MessageInput value={props.data.newMessageText}  dispatch={props.dispatch}/>
            </div>
        </div>
    )
}

export default Dialogs;