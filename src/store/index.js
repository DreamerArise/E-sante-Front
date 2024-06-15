import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import patientReducer from './reducers/patientReducer';
import doctorReducer from './reducers/doctorReducer';

const rootReducer = combineReducers({
  patient: patientReducer,
  doctor: doctorReducer,
});

const store = createStore(rootReducer);

export default store;
