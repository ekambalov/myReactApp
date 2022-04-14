import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state : { 
        profilePage:    {
            postData: [
                {id:0, message:"fuck you, russian warship!", likesCounter:1337},
                {id:1, message:"Hellow, world", likesCounter:10},
                {id:2, message:"It's my first post", likesCounter:0},
                {id:3, message:"fuck fuck", likesCounter:0},
                {id:4, message:"fuck", likesCounter:0}
            ],
            newPostText: ''
        },
        dialogsPage : {
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
        },
        sidebar: {}
      },
      _callSubscriber() {
        console.log('state change')
    },

      getState(){
          return this._state;
      },
      subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action){

        profileReducer(this._state.profilePage,action);
        dialogsReducer(this._state.dialogsPage,action);
        sidebarReducer(this._state.sidebar,action);
        
        this._callSubscriber(this._state);
    }
    
}







export default store;
window.store = store;