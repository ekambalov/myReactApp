import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogsItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css'
import Message from './Message/Message';





const Dialogs = (props) => {


let dialogs = props.dialogsData
    .map( data=> <DialogsItem id={data.id} name={data.name}/>);
let messages = props.messagesData
    .map( data =><Message message={data.message} id={data.id}/>);

    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogs__items}>
                <ul className={classes.dialogs__list}>
                    {dialogs}
                </ul>
            </div>
            <div className={classes.message}>
                {messages}
            </div>
        </div>
    )
}

export default Dialogs;