const SEND_MESSAGE = 'SEND-MESSAGE';


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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: state.messagesData.length + 1,
                message: action.message
            }
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage]
        };
            
        default:
            return state;
    }

}


export const sendMessage = (message) => {
    return {type: SEND_MESSAGE, message }
}



export default dialogsReducer;