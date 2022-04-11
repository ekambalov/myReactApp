const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let store = {
    _state : { profilePage:
        {
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
            ]
        }
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
        if(action.type === ADD_POST){
            let newPost = {
                id: this._state.profilePage.postData.length + 1,
                message: this._state.profilePage.newPostText,
                likesCounter: 0
            }
            this._state.profilePage.postData.push(newPost);
            this._callSubscriber(this._state)
            this._state.profilePage.newPostText ='';
            this._callSubscriber(this._state)    
        } else if (action.type===UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        }
    }
    
}


export const addPostActionCreator = () => {
    return {type: ADD_POST};
}

export const onPostChangeActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}





export default store;
window.store = store;