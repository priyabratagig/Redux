import { createStore } from 'redux'
import reducer from './Cake/Reducers'
const Store = createStore(reducer);
export default Store;