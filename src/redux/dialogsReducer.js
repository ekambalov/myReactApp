const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state,action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: state.messagesData.length + 1,
                message: action.newText
            }
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText; 
            return state;
        default:
            return state;
    }

}

export default dialogsReducer;