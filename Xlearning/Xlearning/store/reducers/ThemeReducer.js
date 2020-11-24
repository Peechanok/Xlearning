import { TOGGLE_DARKMODE } from "../actions/ThemeAction";

const initialThemeState = {
  isDarkMode: false,
};

const themeReducer = (state = initialThemeState, action) => {
  switch (action.type) {
    case TOGGLE_DARKMODE:
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    default:
      return {
        ...state,
      };
  }
};

export default themeReducer;
