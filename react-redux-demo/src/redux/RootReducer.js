import { combineReducers } from 'redux'
import cakeReducer from './Cake/Reducers';
import icecreameReducer from './Icecreame/Reducers'
import usersReducer from './Users/Reducers'
const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreameReducer,
    users: usersReducer,
});
export default rootReducer;