

const initialState = {
    photos: [],
  };
  
  const foto_redux = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PHOTOS':
        return { ...state, photos: action.payload };
      default:
        return state;
    }
  };
  
  export default foto_redux;
  