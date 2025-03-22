import { createStore } from "redux";

const initialState = {
  isEditable: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "EDIT_EMPLOYEE":
      return { ...state, isEditable: true };
    case "ADD_EMPLOYEE":
      return { ...state, isEditable: false };
    default:
      return state;
  }
};

export const store = createStore(reducer);
