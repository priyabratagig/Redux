import { combineReducers } from 'redux'
import cakeReducer from './Cake/Reducers';
import icecreameReducer from './Icecreame/Reducers'
const rootReducer = combineReducers({
    cake: cakeReducer,
    icecreame: icecreameReducer,
});
export default rootReducer;