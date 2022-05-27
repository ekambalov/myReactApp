import { connect } from 'react-redux';
import {
	addPostActionCreator,
	onPostChangeActionCreator,
} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

let mapStateToProps = state => {
	return {
		data: state.profilePage.postData,
		newPostText: state.profilePage.newPostText,
	};
};

let mapDispatchToProps = dispatch => {
	return {
		updateNewPostChange: text => {
			dispatch(onPostChangeActionCreator(text));
		},
		addPost: text => {
			dispatch(addPostActionCreator(text));
		},
	};
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
