import { combineReducers } from 'redux'
import cakeReducer from './Cake/Reducers';
import icecreameReducer from './Icecreame/Reducers'
const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreameReducer,
});
export default rootReducer;