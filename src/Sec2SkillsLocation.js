import React from 'react';

const Sec2SkillsLocation = () => {
        return (<section>
            <div>
				<h2 className="style-header">2. Skills and location</h2>

				{/* Dicipline */}
				<div className="flex flex-column">
					<p id="">Which is your primary design discipline?</p>
					<div id="skills-diciplineId" className="skills-dicipline flex flex-row flex-child buttonForm">
						<input type="radio" name="diciplineButton" id="id1" /><label htmlFor="id1">Design Research</label>
						<input type="radio" name="diciplineButton" id="id2" /><label htmlFor="id2">Visual Design</label>
						<input type="radio" name="diciplineButton" id="id3" /><label htmlFor="id3">UX Design</label>
						<input type="radio" name="diciplineButton" id="id4" /><label htmlFor="id4">Front-end Dev</label>
					</div>
				</div>
				<div className="flex flex-row flex-child">

					{/* Experience */}
					<div className="flex flex-column flex-child">
						<p>Do you have experience with any other diciplines?</p>
						<div className="skills-checkbox flex-child buttonForm checkboxDiv">
							<input id="check9" type="checkbox" />
							<label htmlFor="check9" className="flex flex-row skills-checkbox-button">
								<span><div className="tick"></div></span>Visual Design
							</label>
							<input id="check10" type="checkbox" />
							<label htmlFor="check10" className="flex flex-row skills-checkbox-button">
								<span><div className="tick"></div></span>UX Design
							</label>
							<input id="check11" type="checkbox" />
							<label htmlFor="check11" className="flex flex-row skills-checkbox-button">
								<span><div className="tick"></div></span>Front-end Development
							</label>
							<input id="check12" type="checkbox" />
							<label htmlFor="check12" className="flex flex-row skills-checkbox-button">
								<span><div className="tick"></div></span>None
							</label>
						</div>
					</div>

					<div className="flex flex-column flex-child">
						<p>Where are you interested in working?</p>
						<div className="skills-checkbox flex-child buttonForm checkboxDiv">
							<input id="check1" type="checkbox" />
							<label htmlFor="check1" className="flex flex-row skills-checkbox-button">
								<span><div className="tick"></div></span>Austin, Texas
							</label>
							<input id="check2" type="checkbox" />
							<label htmlFor="check2" className="flex flex-row skills-checkbox-button">
								<span><div className="tick"></div></span>New York, New York
							</label>
							<input id="check3" type="checkbox" />
							<label htmlFor="check3" className="flex flex-row skills-checkbox-button">
								<span><div className="tick"></div></span>Toronto, Canada
							</label>
							<input id="check4" type="checkbox" />
							<label htmlFor="check4" className="flex flex-row skills-checkbox-button">
								<span><div className="tick"></div></span>Shanghai, China
							</label>
							<input id="check5" type="checkbox" />
							<label htmlFor="check5" className="flex flex-row skills-checkbox-button">
								<span><div className="tick"></div></span>Dublin, Ireland
							</label>
							<input id="check6" type="checkbox" />
							<label htmlFor="check6" className="flex flex-row skills-checkbox-button">
								<span><div className="tick"></div></span>Hursley, United Kingdom
							</label>
							<input id="check7" type="checkbox" />
							<label htmlFor="check7" className="flex flex-row skills-checkbox-button">
								<span><div className="tick"></div></span>Boeblingen, Germany
							</label>
							<input id="check8" type="checkbox" />
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