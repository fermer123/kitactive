const accountReducer = (state, action) => {
  switch (action.type) {
    case 'asd': {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default accountReducer;
