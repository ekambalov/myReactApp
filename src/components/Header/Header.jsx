import React from 'react';
import classes from './Header.module.css';

const Header = () =>{
    return(
        <header className={classes.header}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png' className={classes.logo} alt='logo pic'/>
        <h1 className={classes.title}> My Fucking Social Network</h1>
        </header> 
    )
}
export default Header;