import {createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import RootReducer from './RootReducer';

const store = createStore(
    RootReducer,
    composeWithDevTools(),    
    );

export default store;
