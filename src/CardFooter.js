import React from 'react'
import "./CardFooter.css";
import CheckIcon from '@material-ui/icons/Check';
import IconButton from "@material-ui/core/IconButton"
import ClearIcon from '@material-ui/icons/Clear';
import RateReviewIcon from '@material-ui/icons/RateReview';
import StarIcon from '@material-ui/icons/Star';

function CardFooter() {
    return (
        <div className='cardFooter'>
            <IconButton> 
            <CheckIcon style={{ fontSize: 40 }} className="cardFooter__checkIcon"/>
            </IconButton>

            <IconButton> 
            <RateReviewIcon style={{ fontSize: 40 }} className="cardFooter__rateIcon"/>
            </IconButton>

            <IconButton> 
            <StarIcon style={{ fontSize: 40 }} className="cardFooter__starIcon"/>
            </IconButton>

            <IconButton> 
            <ClearIcon style={{ fontSize: 40 }} className="cardFooter__clearIcon"/>
            </IconButton>
        </div>
    )
}

export default CardFooter
