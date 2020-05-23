import React from "react";
import { connect } from "react-redux";
import { removeFeature } from "../actions";

const AddedFeature = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.removeFeature(props.feature);
  };

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={(e) => handleClick(e)}>
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, { removeFeature })(AddedFeature);
