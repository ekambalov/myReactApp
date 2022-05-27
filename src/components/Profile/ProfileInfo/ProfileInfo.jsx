import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css';
import defaluteAvatar from '../../../assets/img/defalut-avatar.webp';
import ProfileStatus from '../ProfileStatus/ProfileStatus';

const ProfileInfo = props => {
	if (!props.profile) {
		return <Preloader />;
	}
	return (
		<section className={classes.profile}>
			<img
				src={
					props.profile.photos.large
						? props.profile.photos.large
						: defaluteAvatar
				}
				className={classes.profile__avatar}
				alt='profile'
			/>
			<div className={classes.profile__description}>
				<h1 className={classes.profile__name}>{props.profile.fullName}</h1>
				<ProfileStatus
					status={props.status}
					updateStatus={props.updateStatus}
				/>
				<p className={classes.profile__info}>
					{'About me: ' + props.profile.aboutMe}
				</p>
				<p className={classes.profile__info}>
					{'Looking for a job: ' +
						(props.profile.lookingForAJob ? 'yeas' : 'no')}
				</p>
				<p className={classes.profile__info}>
					{'Description: ' + props.profile.lookingForAJobDescription}
				</p>
			</div>
		</section>
	);
};

export default ProfileInfo;
