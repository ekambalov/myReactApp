import React from 'react';
import { sendMessageActionCreator, updateNewMessageActionCreator } from '../../../redux/dialogsReducer';
import classes from './MessageInput.module.css'




const MessageInput = (props) => {

    let newMessage = React.createRef();

    const onSendMessage = () =>{
        let text = newMessage.current.value;
        props.sendMessage(text);
    }
    const onUpdateMessage = () => {
        let text = newMessage.current.value;
        props.updateMessage(text);
    }
    return(
        <div className={classes.input}>
            <textarea ref={newMessage}
             value = {props.value}
             onChange={onUpdateMessage}
             placeholder='Write here...'></textarea>
            <button onClick={onSendMessage}>Send</button>
        </div>
    )
}

export default MessageInput;