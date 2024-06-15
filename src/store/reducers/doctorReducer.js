const initialState = {
    doctor: null,
  };
  
  const doctorReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_DOCTOR':
        return {
          ...state,
          doctor: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default doctorReducer;
  