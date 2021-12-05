const SET_USER = 'SET_ USER';

const initialState = {
  currentUser: {},
  isAuth: false,
};

const authorizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        currentUser: action.payload.user,
        isAuth: true,
      };
    }
    default:
      return state;
  }
};

export const setUser = (user) => ({ type: SET_USER, payload: user });

export default authorizationReducer;
