const initialState = {
    patient: null,
  };
  
  const patientReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PATIENT':
        return {
          ...state,
          patient: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default patientReducer;
  