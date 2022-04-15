const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


const initialState = {
    dialogsData : [
      {id: 1, name: "Zmicer"},
      {id: 2, name: "Jahor"},
      {id: 3, name: "Julia"},
      {id: 4, name: "Mikita"},
      {id: 5, name: "Hanna"}
    ],
    messagesData : [
      {id:1, message: 'Hi!'},
      {id:2, message: 'How are you?'},
      {id:3, message: 'wtf, man?!'},
      {id:4, message: 'it\'s not of your busnisses'},
      {id:5, message: 'yo'}
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:{
            let newMessage = {
                id: state.messagesData.length + 1,
                message: action.newText 
            }
            let stateCopy = {...state};
            stateCopy.messagesData = [...state.messagesData]
            stateCopy.messagesData.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT:{
            let stateCopy = {...state}
            stateCopy.newMessageText = action.newText; 
            return stateCopy;}
        default:
            return state;
    }

}


export const sendMessageActionCreator = (message) => {
    return {type: SEND_MESSAGE, newText: message}
}

export const updateNewMessageActionCreator = (text) =>{
    return {type: UPDATE_NEW_MESSAGE_TEXT, newText: text}
}

export default dialogsReducer;