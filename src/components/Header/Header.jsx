import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) =>{
    return(
        <header className={classes.header}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png' className={classes.logo} alt='logo pic'/>
        <h1 className={classes.title}> My Fucking Social Network</h1>
        <div className={classes.loginBlock}>
            {props.isAuth ? props.login
             : <NavLink className={classes.loginLink} to='/login'>Login</NavLink>
            }
        </div> 
        </header> 
    )
}
export default Header;