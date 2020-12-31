import React from 'react'
import "./Header.css";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import IconButton from "@material-ui/core/IconButton"
import ForumIcon from '@material-ui/icons/Forum';
import logo from './images/tinder-car.png'

function Header() {
    return (
        <div className='header'>
            <IconButton> 
            <PersonOutlineIcon frontSize="large" className="header__icon"/>
            </IconButton>

            <img
            className="header__logo"
            src={logo}
            alt=""
            />

            <IconButton> 
            <ForumIcon frontSize="large" className="header__icon"/>
            </IconButton>

        </div>
    )
}

export default Header
