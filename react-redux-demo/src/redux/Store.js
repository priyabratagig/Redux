import { createStore } from 'redux'
// import reducer from './Cake/Reducers'
import rootReducer from './RootReducer';
const Store = createStore(rootReducer);
export default Store;