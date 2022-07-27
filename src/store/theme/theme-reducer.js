import { ADD_THEME } from "./theme-actions"

export const themeReducer = (store = 'dark', { type, payload }) => {
  switch(type) {
    case ADD_THEME: {
      return payload;
    }
    default: {
      return store;
    }
  }
}
