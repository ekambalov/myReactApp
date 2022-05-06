import React from 'react'
import Preloader from '../../common/Preloader/Preloader'
import classes from './ProfileInfo.module.css'

const ProfileInfo = (props)=>{
  if(!props.profile) {
    return <Preloader/>
  }
    return (
          <section className={classes.profile}>
            <img src='https://cdn.mos.cms.futurecdn.net/yL3oYd7H2FHDDXRXwjmbMf.jpg' alt='album pic' className={classes.album} />
          <img src={props.profile.photos.large} className={classes.profile__avatar}/>
          <div className={classes.profile__description}>
            <h1 className={classes.profile__name}>{props.profile.fullName}</h1>
            <p className={classes.profile__info}>{'About me: '+props.profile.aboutMe}</p>
            <p className={classes.profile__info}>{props.profile.lookingForAJob ? 'Looking for a job: '+'yeas' : 'Looking for a job: '+'no'}</p>
            <p className={classes.profile__info}>{'Description: '+props.profile.lookingForAJobDescription}</p>
          </div>
          </section>
    )
} 

export default ProfileInfo;