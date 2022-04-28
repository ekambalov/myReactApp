import * as axios from 'axios';
import React from 'react';
import styles from './Users.module.css'
import defalutAvatar from '../../assets/img/defalut-avatar.webp'

const Users = (props) => {

    const getUsers = () => {
        
        if(props.users.length===0){
            
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
    
            })      
            
        }
    }


    return ( <div className={styles.container}> 

        {
            props.users.map( u => {
               return <div key={u.id} className={styles.user}>
                    
                            <div className={styles.userBtn}>

                            <img src={u.photos.small===null ? defalutAvatar : u.photos.small} alt="avatar" className={styles.usersPhoto} />                   
                        
                            {u.followed? <button onClick={()=> props.unfollow(u.id)}>follow</button> : <button onClick={()=> props.follow(u.id)}>unfollow</button>}
                            </div>
                        
                            <div className={styles.info}>
                                <div className={styles.infoLeft}>
                                    <h2 className={styles.userName}>{u.name}</h2>
                                    <p className={styles.userStatus}>{u.status}</p>
                                </div>

                                <div className={styles.infoRight}>
                                    {/* <h5 className={styles.location}>{u.location.country},</h5>
                                    <h5 className={styles.location}>{u.location.city}</h5>  */}
                                </div>
                            </div>
                        
                     </div>
                }
            )
        }
        <button className={styles.button} onClick = {getUsers} >get users</button>
    </div>
    )
}

export default Users;