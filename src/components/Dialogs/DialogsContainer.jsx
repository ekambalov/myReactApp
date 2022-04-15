import React from 'react';
import StoreContext from '../../StoreContext';
import DialogsItem from './DialogItem/DialogItem';
import Dialogs from './Dialogs';
import Message from './Message/Message';





const DialogsContainer = (props) => {



    return(
        <StoreContext.Consumer>
            { (store) => {
                
                let dialogs = store.getState().dialogsPage.dialogsData
                    .map( element => <DialogsItem id={element.id} name={element.name}/>);
                let messages = store.getState().dialogsPage.messagesData
                    .map( element =><Message message={element.message} id={element.id} />);
                
                return <Dialogs dialogs={dialogs} messages={messages}/>
            }
            }

        </StoreContext.Consumer>
    )
}

export default DialogsContainer;