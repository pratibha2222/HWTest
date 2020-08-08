import { combineReducers } from 'redux';
import aircraftLogReducer from './aircraftLogReducer';
import changeStatusReducer from './changeStatusReducer';

const rootReducer = combineReducers({
    aircraftLogData:  aircraftLogReducer,
    changeStatusData: changeStatusReducer
})

export default rootReducer;