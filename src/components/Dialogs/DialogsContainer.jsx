import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import DialogsItem from './DialogItem/DialogItem';
import Dialogs from './Dialogs';
import Message from './Message/Message';





let mapStateToProps = (state) => {
    let dialogs = state.dialogsPage.dialogsData
                    .map( element => <DialogsItem id={element.id} name={element.name}/>);
    let messages = state.dialogsPage.messagesData
        .map( element =><Message message={element.message} id={element.id} />);
    return (
        {
            dialogs: dialogs,
            messages: messages
        }
    )
}





let mapDispatchToProps = () => {}






export default compose( 
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect 
)(Dialogs);