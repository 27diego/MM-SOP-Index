import history from "../../history";

export const selectDep = dep => {
  return {
    type: "SELECT_DEPARTMENT",
    payload: dep
  };
};
