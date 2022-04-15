import React from 'react';
import { connect } from 'react-redux';
import { sendMessageActionCreator, updateNewMessageActionCreator } from '../../../redux/dialogsReducer';
import MessageInput from './MessageInput';



let mapStateToProps = (state) => {
    return {
        value: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        sendMessage: (text) => {
            dispatch(sendMessageActionCreator(text))
        },
        updateMessage: (text) => {
            dispatch(updateNewMessageActionCreator(text));
        }

    }
}

const MessageInputContainer = connect(mapStateToProps,mapDispatchToProps)(MessageInput)

export default MessageInputContainer;