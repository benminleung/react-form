import React from "react";
import Validation from "./Validation";

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
                        onChange={(e)=>props.portfolioChange(e.target.value)}
                        type="text"
                        placeholder="Portfolio link*"
                    />
                    <span className="invalidMessage">{error.portfolio}</span>
                </div>
                <textarea
                    value={props.state.moreInfo}
                    onChange={(e)=>props.moreInfoChange(e.target.value)}
                    rows="7"
                    className="style-rowPadding"
                    placeholder="Anything else (another link, availability, etc.)?"
                />
            </div>
        </div>
        <div className="flex flex-row">
            <Validation state={props.state} validate={props.validate}/>
        </div>
    </section>);
};

export default Sec3Portfolio;
