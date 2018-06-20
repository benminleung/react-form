import React from 'react';
import './SecHeader.css';
import {
  BrowserRouter as Router,
  NavLink
} from 'react-router-dom';

const SecHeader = () => {
    return (<section className='SecHeader'>
        <div>
			<h1>Lets talk</h1>
			<p>Think you have what it takes? Show us.</p>
		</div>
        <div>
            <ul className="navBar-container">
                <li><NavLink exact activeStyle={{color:'orange'}} to="/">Home</NavLink></li>
                <li><NavLink exact activeStyle={{color:'orange'}} to="/personal-information">Personal Information</NavLink></li>
                <li><NavLink exact activeStyle={{color:'orange'}} to="/skills-and-location">Skills and Location</NavLink></li>
                <li><NavLink exact activeStyle={{color:'orange'}} to="/portfolio">Portfolio</NavLink></li>
            </ul>
        </div>

    </section>)
}

export default SecHeader;