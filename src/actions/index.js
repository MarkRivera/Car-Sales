export const ADD_FEATURE = "ADD_FEATURE";

export const addFeature = (state) => {
  console.log("Add New Feature");
  return {
    type: ADD_FEATURE,
    payload: state,
  };
};
