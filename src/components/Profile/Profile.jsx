import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = props => {
	return (
		<main className={classes.container}>
			<ProfileInfo
				profile={props.profile}
				myId={props.myId}
				status={props.status}
				updateStatus={props.updateStatus}
			/>
			<MyPostsContainer />
		</main>
	);
};

export default Profile;
