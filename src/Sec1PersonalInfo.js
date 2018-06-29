import React from 'react';
import './Sec1PersonalInfo.css';
import {NavLink} from 'react-router-dom';
import nav from './nav';
import NextButton from './components/NextButton';

const Sec1PersonalInfo = (props) => {

	const error = props.validate(props.state);

	const inputBoxLooper = (array) => array.map((item) => inputBox(item[0], item[1]));

	const inputBox = (fieldName, placeHolder) => {
		// console.log(fieldName, " ", placeHolder)
		return (
			<div key = {fieldName} className={error[fieldName] ? "invalid inputContainer" : "inputContainer"}>
				<input	
					onChange = {(e) => props.universalChange(fieldName ,e.target.value)}
					value = {props.state[fieldName]}
					type = "text" placeholder={placeHolder}
					onBlur = {() => props.isTouchedChange(fieldName)}
				/>
				{props.state.isTouched[fieldName] && <span className="invalidMessage">{error[fieldName]}</span>}
			</div>
		)
	}

    return (<section className="Sec1PersonalInfo">
			<div>
				<h2 className="style-header">1. Personal information</h2>
				<div className="flex flex-row style-rowPadding">
					<div className="flex flex-column flex-child">
						{inputBoxLooper([
								['name', 'Full Name'],
								['email', 'Email*'],
								['email2', 'Re-enter email*']
						])}
						
					</div>
					<div className="flex flex-column flex-child personalInfo-right">
						{inputBox('phone', 'Phone Number*')}
					</div>
				</div>
				<div className="style-rowPadding ">
					{inputBox('address', 'Address*')}

					<div className="flex flex-row flex-child">
						{inputBoxLooper([
								['city', 'City*'],
								['state', 'State'],
								['country', 'Country/Region*'],
								['zip', 'Zip/Postal code']
						])}
					</div>
				</div>
				
				<div className="style-rowPadding">
					<textarea
						value={props.state.hearAboutUs}
						onChange={(e) => props.hearAboutUsChange(e.target.value)}
						rows="3"
						placeholder="How did you hear about us?"
                	/>
				</div>
			</div>
			<NextButton text='Skills and Location' toLink='skillsLocation' click={()=>console.log('contains CLICK')}/>
	</section>)
}

export default Sec1PersonalInfo;