import React from 'react'
import classes from './ProfileInfo.module.css'

const ProfileInfo = ()=>{
    return (
          <section className={classes.profile}>
            <img src='https://cdn.mos.cms.futurecdn.net/yL3oYd7H2FHDDXRXwjmbMf.jpg' alt='album pic' className={classes.album} />
          <img src='https://pbs.twimg.com/profile_images/1443530080387571712/Go90yw4N_400x400.jpg' className={classes.profile__avatar}/>
          <div className={classes.profile__description}>
            <h1 className={classes.profile__name}>Jahor Kambalau</h1>
            <span className={classes.profile__info}>info</span>
          </div>
          </section>
    )
}

export default ProfileInfo;