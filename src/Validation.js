import React from 'react';

const Validation = (props) => {
    const errors = props.validate(props.state);

    return (<button className="footer-submit" id="submitId" onClick={()=>Object.values(errors).forEach(item=>console.log(item))}>
        Submit
    </button>)
}

export default Validation;