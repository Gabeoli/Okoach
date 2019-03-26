import { combineReducers } from 'redux';

import SignUpReducer from './signUp/Reducer';

const RootReducer = combineReducers({
    SignUpReducer,
});

export default RootReducer;