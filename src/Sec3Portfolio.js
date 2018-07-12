import React from "react";

const Sec3Portfolio = props => {

	const error = props.validate(props.state);

    return (<section>
        <div>
            <h2 className="style-header">3. Porfolio</h2>
            <p>
                Prove you're IBM's next great designer by showing us who you are. What you've done. How you think. Tell us your story.
            </p>
            <div>
                <div className={error.portfolio ? "invalid inputContainer" : "inputContainer"}>
                    <input
                        value={props.state.portfolio}
                        onChange={(e)=>props.universalChange('portfolio', e.target.value)}
                        type="text"
                        placeholder="Portfolio link*"
                        onBlur = {() => props.isTouchedChange('portfolio')}
                    />
                    {props.state.isTouched.portfolio && <span className="invalidMessage">{error.portfolio}</span>}
                </div>
                <textarea
                    value={props.state.moreInfo}
                    onChange={(e)=>props.universalChange('moreInfo', e.target.value)}
                    rows="7"
                    className="style-rowPadding"
                    placeholder="Anything else (another link, availability, etc.)?"
                />
            </div>
        </div>
        <div className="flex flex-row">
            <button className="footer-submit" id="submitId" onClick={()=>Object.values(error).forEach(item=>console.log(item))}>
                Submit
            </button>
        </div>


    </section>);
};

export default Sec3Portfolio;
