
/* states */
export const initialState = {
  mainPosts: []
};

/* action types */
const ADD_POST = 'ADD_POST';
const ADD_DUMMY = 'ADD_DUMMY';

/* actions */
const addPost = {
  type: ADD_POST,
  data: {

  }
};

const addDummy = {
  type: ADD_DUMMY,
  data: {
    content: 'hello',
    UserId: 1,
    User: {
      nickname: 'guya'
    }
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [action.data, ...mainPosts]
      };
    case ADD_DUMMY:
      return {
        ...state,
        mainPosts: [action.data, ...mainPosts]
      };
    default:
      return {
        ...state,
        mainPosts: []
      };
  }
}

export default reducer;