import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
// import reducer from './Cake/Reducers'
import rootReducer from './RootReducer';
const Store = createStore(rootReducer, applyMiddleware(logger));
export default Store;