import React from "react";

const Sec3Portfolio = props => {
    return (<section>
      <div>
        <h2 className="style-header">3. Porfolio</h2>
        <p>
          Prove you're IBM's next great designer by showing us who you are. What
          you've done. How you think. Tell us your story.
        </p>
        <div>
          <input
            type="text"
            id="portfolioId"
            name=""
            placeholder="Portfolio link*"
          />
          <textarea
            rows="7"
            className="style-rowPadding"
            placeholder="Anything else (another link, availability, etc.)?"
          />
        </div>
      </div>
    </section>);
};

export default Sec3Portfolio;