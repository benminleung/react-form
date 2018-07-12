import React from 'react';
import { Link } from 'react-router-dom';
import nav from '../nav';

const NextButton = (props) => {
    

    return (
        <Link 
            className="nextButton"
            to={nav[props.toLink]}
            onClick={props.click}
        >
            Next: {props.text}

        </Link>
    )
}

NextButton.defaultProps = {
    click: ()=>console.log('clicked')
}

export default NextButton;