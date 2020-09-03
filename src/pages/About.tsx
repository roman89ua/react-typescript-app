import React from "react";
import { useHistory } from "react-router-dom";

const About: React.FunctionComponent = () => {
  const history = useHistory();
  return (
    <React.Fragment>
      <h1>About page</h1>
      <p>Hello.</p>
      <p>
        This application was developed for educational purposes. However, it can
        be used by anyone in everyday life to systematize the day-to-day affairs
        there responsibilities. I hope my application will be useful for you.
      </p>
      <p>The developer of this application - Roman Kostiuk.</p>
      <button
        className="waves-effect waves-light btn"
        onClick={() => history.push("/")}
      >
        Go to Tasks page
      </button>
    </React.Fragment>
  );
};

export default About;
