import React from 'react';

export const TableResults = (props) => {
    return (<table>
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
    </table>)
}