import React from 'react';
import styles from './Users.module.css'

const Users = (props) => {

    if(props.users.length===0){
        console.log(props.users.length)
        props.setUsers(
            [
                {id: 1, avatarUrl:'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png', 
                  followed: true, fullName: "Zmicer", status: 'chill&relax', location: {country:'Belarus', city:'Babruisk'}},
                {id: 2, avatarUrl:'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
                  followed: false, fullName: "Ivan", status: 'sucking cock', location: {country:'Russia', city:'Voronej'}},
                {id: 3, avatarUrl:'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
                  followed: true, fullName: "Jahor", status: 'work hard', location: {country:'Poland', city:'Starogard Gdanski'}},
                {id: 4, avatarUrl:'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
                  followed: true, fullName: "Julia", status: 'in love with Jahor', location: {country:'Belarus', city:'Mensk'}}
          
              ]
        )
    }
    return ( <div className={styles.container}> 

        {
            props.users.map( u => {
               return <div key={u.id} className={styles.user}>
                    
                            <div className={styles.userBtn}>

                            <img src={u.avatarUrl} alt="avatar" className={styles.usersPhoto} />                   
                        
                            {u.followed? <button onClick={()=> props.unfollow(u.id)}>follow</button> : <button onClick={()=> props.follow(u.id)}>unfollow</button>}
                            </div>
                        
                            <div className={styles.info}>
                                <div className={styles.infoLeft}>
                                    <h2 className={styles.userName}>{u.fullName}</h2>
                                    <p className={styles.userStatus}>{u.status}</p>
                                </div>

                                <div className={styles.infoRight}>
                                    <h5 className={styles.location}>{u.location.country},</h5>
                                    <h5 className={styles.location}>{u.location.city}</h5> 
                                </div>
                            </div>
                        
                     </div>
                }
            )
        }
    </div>
    )
}

export default Users;