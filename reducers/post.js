
/* states */
export const initialState = {
  mainPosts: [{
    User: {
      id: 1,
      nickname: 'guya'
    },
    content: 'new Post!',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdQ4sfPH_1NVTkLGd1kN_fUMbybg5ySOORwQ&usqp=CAU'
  }],
  imagePaths: []
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
        ...state
      };
  }
}

export default reducer;