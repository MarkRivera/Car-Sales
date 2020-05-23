import React from "react";
import { connect } from "react-redux";
import { addFeature } from "../actions";

const AdditionalFeature = (props) => {
  const handleClick = (e) => {
    props.addFeature(props.feature);
  };

  return (
    <li>
      <button className="button" onClick={(e) => handleClick(e)}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, {
  addFeature,
})(AdditionalFeature);
