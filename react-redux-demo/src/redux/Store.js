import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
// import reducer from './Cake/Reducers'
import rootReducer from './RootReducer';

const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));
export default Store;