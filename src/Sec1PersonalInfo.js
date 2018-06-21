import React from 'react';
import './Sec1PersonalInfo.css';

const Sec1PersonalInfo = (props) => {
    return (<section className="Sec1PersonalInfo">
			<div>
				<h2 className="style-header">1. Personal information</h2>
				<div className="flex flex-row style-rowPadding">
					<div className="flex flex-column flex-child">
						<input onChange={(e) => props.nameChange(e.target.value)} value={props.state.name} type="text" id="nameId" name="name" placeholder="Full name*"/>
						<input onChange={(e) => props.emailChange(e.target.value)} value={props.state.email} type="text" id="emailId1" name="email1" placeholder="Email*"/>
						<input type="text" id="emailId2" name="email2" placeholder="Re-enter email*"/>
					</div>
					<div className="flex flex-column flex-child personalInfo-right">
						<input onChange={(e) => props.phoneChange(e.target.value)} value={props.state.phone} type="text" id="phoneId" name="phone" placeholder="Phone*"/>
					</div>
				</div>
				<div className="style-rowPadding ">
					<input onChange={(e) => props.addressChange(e.target.value)} value={props.state.address} type="text" id="addressId" name="" placeholder="Address*"/>
					<div className="flex flex-row flex-child">
						<input onChange={(e) => props.cityChange(e.target.value)} value={props.state.city} type="text" id="cityId" name="" placeholder="City*"/>
						<input onChange={(e) => props.stateChange(e.target.value)} value={props.state.state} type="text" id="stateId" name="" placeholder="State"/>
						<input onChange={(e) => props.countryChange(e.target.value)} value={props.state.country} type="text" id="countryId" name="" placeholder="Country/Region*"/>
						<input onChange={(e) => props.zipChange(e.target.value)} value={props.state.zip} type="text" id="zipId" name="" placeholder="Zip/Postal code"/>
					</div>
				</div>
				
				<div className="style-rowPadding">
					<input onChange={(e) => props.hearAboutUsChange(e.target.value)} value={props.state.hearAboutUs} type="text" id="howId" name="" placeholder="How did you hear about us?"/>
				</div>
			</div>
    </section>)
}

export default Sec1PersonalInfo;