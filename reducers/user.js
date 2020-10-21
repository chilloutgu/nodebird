
/* states */
export const initialState = {
  isLoggedIn: false,
  user: {
    nickname: '',
    Posts: [],
    Followings: [],
    Followers: [],
  },
  signupData: null
}

/* actions types */
export const SIGN_UP = 'SIGN_UP';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

/* action constructor */
export const signupAction = (payload) => {
  return {
    type: SIGN_UP,
    payload: payload
  }
}

export const loginAction = () => {
  return {
    type: LOG_IN,
    payload: {
      nickname: 'guya',
      Posts: ['동구의 첫 Post'],
      Followings: ['상근'],
      Followers: ['재혁', '준혁'],
    }
  };
};

export const logoutAction = () => {
  return {
    type: LOG_OUT,
    payload: initialState.user
  };
}

/* reducer */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        signupData: action.payload
      }

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
        user: action.payload
      }
    default:
      return {
        ...state
      };
  }
};

export default reducer;