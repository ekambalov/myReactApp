import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from'./Navbar.module.css';



const Navbar = ()=>{
    return (
        <nav className={classes.nav}>
        <ul className={classes.list}>
          <li><NavLink to='/profile' className={(navData) => navData.isActive ? classes.active+' '+classes.item : classes.item}  >Profile</NavLink></li>
          <li><NavLink to='/dialogs' className={(navData) => navData.isActive ? classes.active+' '+classes.item : classes.item}>Messages</NavLink></li>
          <li><NavLink to='/news' className={(navData) => navData.isActive ? classes.active+' '+classes.item : classes.item}>News</NavLink></li>
          <li><NavLink to='/music' className={(navData) => navData.isActive ? classes.active+' '+classes.item : classes.item}>Music</NavLink></li>
          <li><NavLink to='/settings' className={(navData) => navData.isActive ? classes.active+' '+classes.item : classes.item}>Settings</NavLink></li>
          <li><NavLink to='/users' className={(navData) => navData.isActive ? classes.active+' '+classes.item : classes.item}>Users</NavLink></li>
        </ul>

      </nav>
    )
}

export default Navbar;