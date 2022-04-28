import * as axios from 'axios';
import React from 'react';
import styles from './Users.module.css'
import defalutAvatar from '../../assets/img/defalut-avatar.webp'
import { setCurrentPageAC } from '../../redux/usersReducer';

class Users extends React.Component {

    constructor(props) {
        super(props);



    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
    
            }) 
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
    
            }) 
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);

        let pages = [];

        for (let i = 1; i<=pagesCount; i++){
            pages.push(i);
        }

        return ( <div className={styles.container}> 

                {pages.map(p =>  <button id={p} className={this.props.currentPage === p ? styles.btnPage+' '+styles.btnPageActive : styles.btnPage}
                onClick={(e)=> this.onPageChanged(p)}
                >{p}</button>)}


            {
                this.props.users.map( u => {
                   return <div key={u.id} className={styles.user}>
                        
                                <div className={styles.userBtn}>
    
                                <img src={u.photos.small===null ? defalutAvatar : u.photos.small} alt="avatar" className={styles.usersPhoto} />                   
                            
                                {u.followed? <button onClick={()=> this.props.unfollow(u.id)}>follow</button> : <button onClick={()=> this.props.follow(u.id)}>unfollow</button>}
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
            {/* <button className={styles.button} onClick = {this.getUsers} >get users</button> */}
        </div>
        )
    }
}

export default Users;