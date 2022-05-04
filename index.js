const redux = require('redux'); //Initilization
const reudxLogger = require('redux-logger');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
// Middleware
// Adds extra features to redux
// Third party extention point between an action and reducer
const logger = reudxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;
console.log('Form index.js')
// Store =Subscribe=> APP =Dispatch=> Action => Reducers => Store

// Create Actions {type, payload}
// types
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAME = 'BUY_ICECREAME'
//action creator
const buyCake = () => ({
    //action object
    type: BUY_CAKE,
    info: 'First redux action'
})
const buyIceCreame = () => ({
    type: BUY_ICECREAME
});
//Creating Reducers
// Initial States
// const initialState = {
//     numberOfCakes: 10,
//     numberOfIceCreams: 20,
// }
const InitialCakeState = {
    numberOfCakes: 10,
};
const initialIceCreamState = {
    numberOfIceCreams: 20,
};
// Reducers
// const reducer = (previousState = initialState, action) => {
//     switch (action.type) {
//         case BUY_CAKE:
//             return {
//                 ...previousState,
//                 numberOfCakes: previousState.numberOfCakes - 1,
//             };
//         case BUY_ICECREAME:
//             return {
//                 ...previousState,
//                 numberOfIceCreams: previousState.numberOfIceCreams - 1,
//             }
//         default:
//             return { ...previousState };
//     }
// }
const CakeReducer = (previousState = InitialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...previousState,
                numberOfCakes: previousState.numberOfCakes - 1,
            };
        default:
            return { ...previousState };
    }
}
const IceCreameReducer = (previousState = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAME:
            return {
                ...previousState,
                numberOfIceCreams: previousState.numberOfIceCreams - 1,
            }
        default:
            return { ...previousState };
    }
}
// Redux Store Responsibilities
// 1. Holds app state in one place
// 2. Allows to access the state via getState()
// 3. Allows state to be updated via dispatch(<action-object>)
// 4. Register listeners via subscribe(<listener-functions>)
// 5. Handels unregistering of listeners via function returned by subscribe(<listeners>)

//creating store
const rootReducers = combineReducers({
    // statesName: corresponding reducers
    numberOfCakes: CakeReducer,
    numberOfIceCreams: IceCreameReducer,
})
const store = createStore(rootReducers, applyMiddleware(logger));
console.log('Initial State:');
console.table([store.getState()]);
const unsubscribe = store.subscribe(() => {
    console.log('Updated State:');
    // console.table([store.getState()]);
})
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCreame());
store.dispatch(buyIceCreame());
store.dispatch(buyIceCreame());
unsubscribe()
