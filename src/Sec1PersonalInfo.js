import React from 'react';
import './Sec1PersonalInfo.css';

const Sec1PersonalInfo = (props) => {

	const error = props.validate(props.state);

    return (<section className="Sec1PersonalInfo">
			<div>
				<h2 className="style-header">1. Personal information</h2>
				<div className="flex flex-row style-rowPadding">
					<div className="flex flex-column flex-child">
						<div className={error.name ? "invalid inputContainer" : "inputContainer"}>
							<input onChange={(e) => props.nameChange(e.target.value)} value={props.state.name} type="text" name="name" placeholder="Full name*"/>
							<span className="invalidMessage">{error.name}</span>
						</div>
						<div className={error.email ? "invalid inputContainer" : "inputContainer"}>
							<input onChange={(e) => props.emailChange(e.target.value)} value={props.state.email} type="text" name="email1" placeholder="Email*"/>
							<span className="invalidMessage">{error.email}</span>
						</div>
						<div className={error.email2 ? "invalid inputContainer" : "inputContainer"}>
							<input onChange={(e) => props.email2Change(e.target.value)} value={props.state.email2} type="text" name="email2" placeholder="Re-enter email*"/>
							<span className="invalidMessage">{error.email2}</span>
						</div>
					</div>
					<div className="flex flex-column flex-child personalInfo-right">
						<div className={error.phone ? "invalid inputContainer" : "inputContainer"}>
							<input onChange={(e) => props.phoneChange(e.target.value)} value={props.state.phone} type="text" name="phone" placeholder="Phone*"/>
							<span className="invalidMessage">{error.phone}</span>
						</div>
					</div>
				</div>
				<div className="style-rowPadding ">
					<div className={error.address ? "invalid inputContainer" : "inputContainer"}>
						<input onChange={(e) => props.addressChange(e.target.value)} value={props.state.address} type="text" name="" placeholder="Address*"/>
						<span className="invalidMessage">{error.address}</span>
					</div>
					<div className="flex flex-row flex-child">
						<div className={error.city ? "invalid inputContainer" : "inputContainer"}>
							<input onChange={(e) => props.cityChange(e.target.value)} value={props.state.city} type="text" name="" placeholder="City*"/>
							<span className="invalidMessage">{error.city}</span>
						</div>
						<div className={error.state ? "invalid inputContainer" : "inputContainer"}>
							<input onChange={(e) => props.stateChange(e.target.value)} value={props.state.state} type="text" name="" placeholder="State"/>
							<span className="invalidMessage">{error.state}</span>
						</div>
						<div className={error.country ? "invalid inputContainer" : "inputContainer"}>
							<input onChange={(e) => props.countryChange(e.target.value)} value={props.state.country} type="text" name="" placeholder="Country/Region*"/>
							<span className="invalidMessage">{error.country}</span>
						</div>
						<div className={error.zip ? "invalid inputContainer" : "inputContainer"}>
							<input onChange={(e) => props.zipChange(e.target.value)} value={props.state.zip} type="text" name="" placeholder="Zip/Postal code"/>
							<span className="invalidMessage">{error.zip}</span>
						</div>
					</div>
				</div>
				
				<div className="style-rowPadding">
					<input onChange={(e) => props.hearAboutUsChange(e.target.value)} value={props.state.hearAboutUs} type="text" name="" placeholder="How did you hear about us?"/>
				</div>
			</div>
	</section>)
}

export default Sec1PersonalInfo;