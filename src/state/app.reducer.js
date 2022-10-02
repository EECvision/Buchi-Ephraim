import appActionTypes from "./app.types";

export const INITIALSTATE = {
  outsideDisplay: false,
  inview: "PROJECT_1",
  aboutPage: "default", // enum type: default, show, hide
};

export const appReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case appActionTypes.OUTSIDE_DISPLAY:
      return {
        ...state,
        outsideDisplay: action.payload,
      };

    case appActionTypes.INVIEW:
      return {
        ...state,
        inview: action.payload,
      };
    case appActionTypes.ABOUT_PAGE:
      return {
        ...state,
        aboutPage: action.payload,
      };
    default:
      return state;
  }
};
