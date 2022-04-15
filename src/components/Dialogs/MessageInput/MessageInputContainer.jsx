import React from 'react';
import { sendMessageActionCreator, updateNewMessageActionCreator } from '../../../redux/dialogsReducer';
import StoreContext from '../../../StoreContext';
import MessageInput from './MessageInput';




const MessageInputContainer = (props) => {

    
    

    return(
        <StoreContext.Consumer>
            { (store) => {
            let value = store.getState().dialogsPage.newMessageText    
            const sendMessage = (text) =>{
                store.dispatch(sendMessageActionCreator(text));
            }
            const updateMessage = (text) => {
                store.dispatch(updateNewMessageActionCreator(text));
            }
            return    (<MessageInput
                sendMessage={sendMessage}
                updateMessage={updateMessage}
                value={value}
                />)
            }
        }
        </StoreContext.Consumer>
    )
}

export default MessageInputContainer;