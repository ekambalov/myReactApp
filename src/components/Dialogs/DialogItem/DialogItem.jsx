import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './../Dialogs.module.css'

const DialogsItem = (props) => {
    return (
            <li className={classes.dialogs__item}>
                <NavLink 
                    className={(navData)=> navData.isActive ? classes.link + ' ' + classes.active : classes.link}
                    to={`/dialogs/${props.id}`}> {props.name}
                </NavLink>
            </li>
    )
}



export default DialogsItem;