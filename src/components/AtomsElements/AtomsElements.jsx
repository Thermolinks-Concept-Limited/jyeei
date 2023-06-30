/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const AtomsElements = ({ style, text = "1" }) => {
  return (
    <div className="atoms-elements" style={style}>
      <div className="overlap">
        <img className="oval" alt="Oval" src="/img/oval-3-4.svg" />
        <div
          className="group"
          style={{
            backgroundImage: "url(/img/combined-shape-5.svg)",
          }}
        >
          <div
            className="overlap-group"
            style={{
              backgroundImage: "url(/img/object-4.png)",
            }}
          >
            <div className="element">{text}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

AtomsElements.propTypes = {
  text: PropTypes.string,
};
