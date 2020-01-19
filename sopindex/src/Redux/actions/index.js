import history from "../../history";

export const selectDep = dep => {
  console.log("entering");
  return {
    type: "SELECT_DEPARTMENT",
    payload: dep
  };
};
