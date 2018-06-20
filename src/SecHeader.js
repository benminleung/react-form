import React from 'react';
import './SecHeader.css';
import {
  BrowserRouter as Router,
  NavLink
} from 'react-router-dom';

const SecHeader = () => {
    return (<section className='SecHeader'>
        <div>Header says hello</div>
        <div>
            <ul>
                <li><NavLink exact activeStyle={{color:'orange'}} to="/">Home</NavLink></li>
                <li><NavLink exact activeStyle={{color:'orange'}} to="/personal-information">Personal Information</NavLink></li>
                <li><NavLink exact activeStyle={{color:'orange'}} to="/skills-and-location">Skills and Location</NavLink></li>
                <li><NavLink exact activeStyle={{color:'orange'}} to="/portfolio">Portfolio</NavLink></li>
            </ul>
        </div>

    </section>)
}

export default SecHeader;