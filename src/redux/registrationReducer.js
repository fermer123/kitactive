const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case setUser: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

const setUser = () => ({
  type: SET_USER_DATA,
});

export default registrationReducer;
