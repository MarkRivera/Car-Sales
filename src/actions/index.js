export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const addFeature = (state) => {
  console.log("Add New Feature");
  return {
    type: ADD_FEATURE,
    payload: state,
  };
};

export const removeFeature = (state) => {
  console.log("Remove features");
  return {
    type: REMOVE_FEATURE,
    payload: state,
  };
};
