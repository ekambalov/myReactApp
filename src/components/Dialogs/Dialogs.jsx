import React from 'react';
import classes from './Dialogs.module.css';
import MessageInputRedux from './MessageInput/MessageInput';

const Dialogs = props => {
	const sendMessage = data => {
		props.sendMessage(data.newMessage);
		console.log(data);
	};
	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogs__items}>
				<ul className={classes.dialogs__list}>{props.dialogs}</ul>
			</div>
			<div className={classes.message}>
				{props.messages}
				<MessageInputRedux onSubmit={sendMessage} />
			</div>
		</div>
	);
};

export default Dialogs;
