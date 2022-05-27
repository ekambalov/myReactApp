import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import classes from './MessageInput.module.css';

const MessageInput = props => {
	return (
		<form onSubmit={props.handleSubmit} className={classes.input}>
			<Field
				component={'textarea'}
				name={'newMessage'}
				placeholder='Write here...'
			/>
			<button>Send</button>
		</form>
	);
};

const MessageInputRedux = reduxForm({
	// a unique name for the form
	form: 'sendMessageForm',
})(MessageInput);

export default MessageInputRedux;
