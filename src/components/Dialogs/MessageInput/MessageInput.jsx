import React from 'react';
import classes from './MessageInput.module.css'





const MessageInput = (props) => {

    let newMessage = React.createRef();

    const addMessage = () =>{
        let text = newMessage.current.value;
        alert(text);
    }

    return(
        <div className={classes.input}>
            <textarea ref={newMessage} placeholder='Write here...'></textarea>
            <button onClick={addMessage}>Send</button>
        </div>
    )
}

export default MessageInput;