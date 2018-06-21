import React from 'react';
import './SecHome.css';

const SecHome = (props) => {
    
    const testPersonState = Object.assign({}, props.state);
    console.log(testPersonState);
    testPersonState.name = 'Firstname Lastname';
    testPersonState.email = 'firstname.lastname@testperson.com';
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

        <table>
            <tbody>
                <tr>
                    <th>Info Fields</th>
                    <th>Your reply</th>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>{props.state.name}</td>
                </tr>
                <tr>    
                    <td>Email</td>
                    <td>{props.state.email}</td>
                </tr>
                <tr>
                    <td>Phone Number</td>
                    <td>{props.state.phone}</td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td>{props.state.address}</td>
                </tr>
                <tr>
                    <td>City</td>
                    <td>{props.state.city}</td>
                </tr>
                <tr>
                    <td>State</td>
                    <td>{props.state.state}</td>
                </tr>
                <tr>
                    <td>Country</td>
                    <td>{props.state.country}</td>
                </tr>
                <tr>
                    <td>Zip</td>
                    <td>{props.state.zip}</td>
                </tr>
                <tr>
                    <td>How did you hear about us?</td>
                    <td>{props.state.hearAboutUs}</td>
                </tr>
                <tr>
                    <td>Primary Dicipline</td>
                    <td>Primary Dicipline</td>
                    {/* <td>{props.state.dicipline1}</td> */}
                </tr>
                <tr>
                    <td>Other Diciplines</td>
                    <td>Other Diciplines</td>
                    {/* <td>{props.state.dicipline2}</td> */}
                </tr>
                <tr>
                    <td>Location of interest for work</td>
                    <td>Location of interest for work</td>
                    {/* <td>{props.state.location}</td> */}
                </tr>
                <tr>
                    <td>Link to portfolio</td>
                    <td>{props.state.portfolio}</td>
                </tr>
                <tr>
                    <td>Additional information</td>
                    <td>{props.state.moreInfo}</td>
                </tr>
            </tbody>
        </table>

    </section>)
}

export default SecHome;