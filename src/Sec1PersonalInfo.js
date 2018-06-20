import React from 'react';
import './Sec1PersonalInfo.css';

const Sec1PersonalInfo = (props) => {
    return (<section className="Sec1PersonalInfo">
			<div>
				<h2 className="style-header">1. Personal information</h2>
				<div className="flex flex-row style-rowPadding">
					<div className="flex flex-column flex-child">
						<input type="text" id="nameId" name="name" placeholder="Full name*"/>
						<input type="text" id="emailId1" name="email1" placeholder="Email*"/>
						<input type="text" id="emailId2" name="email2" placeholder="Re-enter email*"/>
					</div>
					<div className="flex flex-column flex-child personalInfo-right">
						<input type="text" id="phoneId" name="phone" placeholder="Phone*"/>
					</div>
				</div>
				<div className="style-rowPadding ">
					<input type="text" id="addressId" name="" placeholder="Adress*"/>
					<div className="flex flex-row flex-child">
						<input type="text" id="cityId" name="" placeholder="City*"/>
						<input type="text" id="stateId" name="" placeholder="State"/>
						<input type="text" id="countryId" name="" placeholder="Country/Region*"/>
						<input type="text" id="zipId" name="" placeholder="Zip/Postal code"/>
					</div>
				</div>
				
				<div className="style-rowPadding">
					<input type="text" id="howId" name="" placeholder="How did you hear about us?"/>
				</div>
			</div>
    </section>)
}

export default Sec1PersonalInfo;