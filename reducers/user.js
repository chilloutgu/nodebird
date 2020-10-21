
/* states */
export const initialState = {
  isLoggedIn: false,
  user: {}
}

/* actions types */
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

/* action constructor */
export const LogIn = user => {
  return {
    type: LOG_IN,
    payload: user
  };
};

export const LogOut = () => {
  return {
    type: LOG_OUT
  };
}

/* reducer */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload
      };
    case LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
        user: {}
      }
    default:
      return {
        ...state
      };
  }
};

export default reducer;