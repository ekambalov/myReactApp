import React from 'react';
import styles from './Users.module.css'
import defalutAvatar from '../../assets/img/defalut-avatar.webp'
import { NavLink } from 'react-router-dom';
import { UsersAPI } from '../../api/api';

const Users = (props) =>{

    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);

    let pages = [];
    
    if(props.currentPage === 1){
        pages = [1,2, pagesCount];
    } else if(props.currentPage === 2){
        pages = [1,2, 3, pagesCount];
    } else if(props.currentPage === pagesCount){
        pages = [1,pagesCount - 1, pagesCount];
    } 
    else if(props.currentPage === pagesCount-1){
        pages = [1,pagesCount - 2,pagesCount - 1, pagesCount];
    } else {
        pages = [1,props.currentPage-1,props.currentPage,props.currentPage+1,pagesCount]
    }

    return ( <div className={styles.container}> 


        {pages.map(p =>  <button id={p} className={props.currentPage === p ? styles.btnPage+' '+styles.btnPageActive : styles.btnPage}
        onClick={(e)=> props.onPageChanged(p)}
        >{p}</button>)}


    {
        props.users.map( u => {
           return <div key={u.id} className={styles.user}>
                
                        <div className={styles.userBtn}>

                            <NavLink to={'/profile/'+u.id}>                            
                                <img src={u.photos.small===null ? defalutAvatar : u.photos.small} alt="avatar" className={styles.usersPhoto} />                   
                            </NavLink>                        
                    
                            {u.followed 
                                ? <button className={styles.btnFollow} 
                                disabled={props.followinInProgress.some(id => id === u.id)} 
                                    onClick={()=> {props.unfollow(u.id)}}>unfollow</button> 
                                : <button className={styles.btnFollow} 
                                disabled={props.followinInProgress.some(id => id === u.id)} 
                                    onClick={()=> { props.follow(u.id) } }>follow</button>}

                        </div>
                    
                        <div className={styles.info}>
                            <div className={styles.infoLeft}>
                                <h2 className={styles.userName}>{u.name}</h2>
                                <p className={styles.userStatus}>{u.status}</p>
                            </div>
                            <div className={styles.infoRight}> </div>                            
                        </div>
                    
                 </div>
            }
        )
    }

</div>)
               
}

export default Users;