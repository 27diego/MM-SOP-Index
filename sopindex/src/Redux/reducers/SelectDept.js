export default (state = {}, action) => {
  switch (action.type) {
    case "SELECT_DEPARTMENT":
      return { ...state, department: action.payload };
    default:
      return state;
  }
};
