import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import {
	maxLengthCreator,
	required,
} from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const maxLength10 = maxLengthCreator(10);

const MyPostInput = props => {
	return (
		<form onSubmit={props.handleSubmit} className={classes.input_wrapper}>
			<h2 className={classes.title}>My Posts</h2>
			<Field
				placeholder='your news'
				className={classes.input}
				component={Textarea}
				name='postInput'
				validate={[required, maxLength10]}
			/>

			<button className={classes.button}>send</button>
		</form>
	);
};

const MyPostInputForm = reduxForm({
	// a unique name for the form
	form: 'pushPostForm',
})(MyPostInput);

const MyPosts = props => {
	let posts = props.data.map(data => (
		<Post
			message={data.message}
			likes={data.likesCounter}
			avatar={props.avatar}
		/>
	));

	const onAddPost = formData => {
		props.addPost(formData.postInput);
	};

	return (
		<div>
			<MyPostInputForm onSubmit={onAddPost} />
			<div className={classes.posts_wrapper}>{posts}</div>
		</div>
	);
};

export default MyPosts;
