import React from 'react';

const Sec2SkillsLocation = (props) => {

	const error = props.validate(props.state);

	const dicipline2Checkbox = (checkbox) => {
		const checkboxState = Object.assign({}, props.state.dicipline2);
		checkboxState[checkbox] = !checkboxState[checkbox];

		props.dicipline2Change(checkboxState);
	}

	const locationCheckbox = (checkbox) => {
		const checkboxState = Object.assign({}, props.state.location);
		checkboxState[checkbox] = !checkboxState[checkbox];

		props.locationChange(checkboxState);
	}

 
	return (<section>
		<div>
			<h2 className="style-header">2. Skills and location</h2>

			{/* Dicipline */}
			<div className="flex flex-column">
				<p id="">Which is your primary design discipline?</p>
				<div id="skills-diciplineId" className="skills-dicipline flex flex-row flex-child buttonForm">
					<input checked={props.state.dicipline1 === 'design'} onChange={()=>props.dicipline1Change('design')} type="radio" name="diciplineButton" id="id1" /><label htmlFor="id1">Design Research</label>
					<input checked={props.state.dicipline1 === 'visual'} onChange={()=>props.dicipline1Change('visual')} type="radio" name="diciplineButton" id="id2" /><label htmlFor="id2">Visual Design</label>
					<input checked={props.state.dicipline1 === 'ux'} onChange={()=>props.dicipline1Change('ux')} type="radio" name="diciplineButton" id="id3" /><label htmlFor="id3">UX Design</label>
					<input checked={props.state.dicipline1 === 'frontEnd'} onChange={()=>props.dicipline1Change('frontEnd')} type="radio" name="diciplineButton" id="id4" /><label htmlFor="id4">Front-end Dev</label>
				</div>
				<span className="invalidMessage">{error.dicipline1}</span>				
			</div>
			<div className="flex flex-row flex-child">

				{/* Experience */}
				<div className="flex flex-column flex-child">
					<p>Do you have experience with any other diciplines?</p>
					<div className="skills-checkbox flex-child buttonForm checkboxDiv">
						<input checked={props.state.dicipline2.visual} onChange={()=>dicipline2Checkbox('visual')} id="check9" type="checkbox" />
						<label htmlFor="check9" className="flex flex-row skills-checkbox-button">
							<span><div className="tick"></div></span>Visual Design
						</label>
						<input checked={props.state.dicipline2.ux} onChange={()=>dicipline2Checkbox('ux')} id="check10" type="checkbox" />
						<label htmlFor="check10" className="flex flex-row skills-checkbox-button">
							<span><div className="tick"></div></span>UX Design
						</label>
						<input checked={props.state.dicipline2.frontEnd} onChange={()=>dicipline2Checkbox('frontEnd')} id="check11" type="checkbox" />
						<label htmlFor="check11" className="flex flex-row skills-checkbox-button">
							<span><div className="tick"></div></span>Front-end Development
						</label>
						<input checked={props.state.dicipline2.none} onChange={()=>dicipline2Checkbox('none')} id="check12" type="checkbox" />
						<label htmlFor="check12" className="flex flex-row skills-checkbox-button">
							<span><div className="tick"></div></span>None
						</label>
					</div>
				</div>

				<div className="flex flex-column flex-child">
					<p>Where are you interested in working?</p>
					<div className="skills-checkbox flex-child buttonForm checkboxDiv">
						<input checked={props.state.location.austin} onChange={()=>locationCheckbox('austin')} id="check1" type="checkbox" />
						<label htmlFor="check1" className="flex flex-row skills-checkbox-button">
							<span><div className="tick"></div></span>Austin, Texas
						</label>
						<input checked={props.state.location.newYork} onChange={()=>locationCheckbox('newYork')} id="check2" type="checkbox" />
						<label htmlFor="check2" className="flex flex-row skills-checkbox-button">
							<span><div className="tick"></div></span>New York, New York
						</label>
						<input checked={props.state.location.toronto} onChange={()=>locationCheckbox('toronto')} id="check3" type="checkbox" />
						<label htmlFor="check3" className="flex flex-row skills-checkbox-button">
							<span><div className="tick"></div></span>Toronto, Canada
						</label>
						<input checked={props.state.location.shanghai} onChange={()=>locationCheckbox('shanghai')} id="check4" type="checkbox" />
						<label htmlFor="check4" className="flex flex-row skills-checkbox-button">
							<span><div className="tick"></div></span>Shanghai, China
						</label>
						<input checked={props.state.location.dublin} onChange={()=>locationCheckbox('dublin')} id="check5" type="checkbox" />
						<label htmlFor="check5" className="flex flex-row skills-checkbox-button">
							<span><div className="tick"></div></span>Dublin, Ireland
						</label>
						<input checked={props.state.location.hursley} onChange={()=>locationCheckbox('hursley')} id="check6" type="checkbox" />
						<label htmlFor="check6" className="flex flex-row skills-checkbox-button">
							<span><div className="tick"></div></span>Hursley, United Kingdom
						</label>
						<input checked={props.state.location.boeblingen} onChange={()=>locationCheckbox('boeblingen')} id="check7" type="checkbox" />
						<label htmlFor="check7" className="flex flex-row skills-checkbox-button">
							<span><div className="tick"></div></span>Boeblingen, Germany
						</label>
						<input checked={props.state.location.somewhere} onChange={()=>locationCheckbox('somewhere')} id="check8" type="checkbox" />
						<label htmlFor="check8" className="flex flex-row skills-checkbox-button">
							<span><div className="tick"></div></span>Somewhere else
						</label>
					</div>
				</div>
			</div>
			
		</div>
	</section>)
}

export default Sec2SkillsLocation;