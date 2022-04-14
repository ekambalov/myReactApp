import React from 'react';
import { sendMessageActionCreator, updateNewMessageActionCreator } from '../../../redux/dialogsReducer';
import MessageInput from './MessageInput';




const MessageInputContainer = (props) => {

    const sendMessage = (text) =>{
        props.dispatch(sendMessageActionCreator(text));
    }
    const updateMessage = (text) => {
        props.dispatch(updateNewMessageActionCreator(text));
    }
    

    return(
        <MessageInput
        sendMessage={sendMessage}
        updateMessage={updateMessage}
        value={props.value}
        />
    )
}

export default MessageInputContainer;