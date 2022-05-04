const redux = require('redux'); //Initilization
const createStore = redux.createStore;
console.log('Form index.js')
// Store =Subscribe=> APP =Dispatch=> Action => Reducers => Store

// Create Actions {type, payload}
const BUY_CAKE = 'BUY_CAKE'; //type
//action creator
const buyCake = () => ({
    //action object
    type: BUY_CAKE,
    info: 'First redux action'
})
//Reducers
const initialState = {
    numberOfCakes: 10,
}
const reducer = (previousState = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return { ...previousState, numberOfCakes: previousState.numberOfCakes - 1 };
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
const store = createStore(reducer)
console.log('Initial State: ', store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated State: ', store.getState()))
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe()
