import React from 'react';
import { sendMessageActionCreator, updateNewMessageActionCreator } from '../../../redux/dialogsReducer';
import classes from './MessageInput.module.css'




const MessageInput = (props) => {

    let newMessage = React.createRef();

    const sendMessage = () =>{
        let text = newMessage.current.value;
        props.dispatch(sendMessageActionCreator(text));
    }
    const updateMessage = () => {
        let text = newMessage.current.value;
        props.dispatch(updateNewMessageActionCreator(text));
    }

    return(
        <div className={classes.input}>
            <textarea ref={newMessage}
             value = {props.value}
             onChange={updateMessage}
             placeholder='Write here...'></textarea>
            <button onClick={sendMessage}>Send</button>
        </div>
    )
}

export default MessageInput;