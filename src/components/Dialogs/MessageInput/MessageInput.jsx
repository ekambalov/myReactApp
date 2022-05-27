import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import {
	maxLengthCreator,
	required,
} from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import classes from './MessageInput.module.css';

const maxLength30 = maxLengthCreator(30);

const MessageInput = props => {
	return (
		<form onSubmit={props.handleSubmit} className={classes.input}>
			<Field
				component={Textarea}
				name={'newMessage'}
				placeholder='Write here...'
				validate={[required, maxLength30]}
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
