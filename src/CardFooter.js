import React from 'react'
import "./CardFooter.css";
import CheckIcon from '@material-ui/icons/Check';
import IconButton from "@material-ui/core/IconButton"
import ClearIcon from '@material-ui/icons/Clear';

function CardFooter() {
    return (
        <div className='cardFooter'>
            <IconButton> 
            <CheckIcon style={{ fontSize: 40 }} className="cardFooter__icon"/>
            </IconButton>

            <IconButton> 
            <ClearIcon style={{ fontSize: 40 }} className="cardFooter__icon"/>
            </IconButton>
        </div>
    )
}

export default CardFooter
