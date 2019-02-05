import React from 'react';
import './SecHome.css';
import { TableResults } from './TableResults';

const SecHome = (props) => {
    
    const testPersonState = Object.assign({}, props.state);
    console.log(testPersonState);
    testPersonState.name = 'Ben Leung';
    testPersonState.email = 'ben.leung@testperson.com';
    testPersonState.phone = '+123 45 678 9000';
    testPersonState.address = 'Apt.12, 234 Test Street';
    testPersonState.city = 'Foo City';
    testPersonState.state = 'Bar';
    testPersonState.country = 'DR Foobar';
    testPersonState.zip = '00000';
    testPersonState.hearAboutUs = 'I heard about you somewhere in Foobar';
    // testPersonState.dicipline1 = '';
    // testPersonState.dicipline2 = {};
    // testPersonState.location = {};
    testPersonState.portfolio = 'https://github.com/firstnamelastname/';
    testPersonState.moreInfo = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

    return (<section className="SecHome">

        <button onClick={()=>props.allChange(testPersonState)}>Test: Fill info</button>
        <TableResults state={props.state}/>

    </section>)
}

export default SecHome;