import appActionTypes from "./app.types";

export const setOustideDisplay = (state) => ({
  type: appActionTypes.OUTSIDE_DISPLAY,
  payload: state,
});

export const setInview = (id) => ({
  type: appActionTypes.INVIEW,
  payload: id,
});

export const setAboutPage = (state) => ({
  type: appActionTypes.ABOUT_PAGE,
  payload: state,
});
