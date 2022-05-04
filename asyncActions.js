const redux = require('redux');
const { default: thunk } = require('redux-thunk'); //middleware for async task
const axios = require('axios');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
// state
const initialState = {
    loading: false,
    users: [],
    error: '',
};
// action types
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
// Actions creators
const usersRequest = () => ({
    type: FETCH_USERS_REQUEST
});
const usersSuccess = (data) => ({
    type: FETCH_USERS_SUCCESS,
    payload: data,
});
const usersFailure = (error) => ({
    type: FETCH_USERS_FAILURE,
    payload: error,
});
// Reducers
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST: return {
            ...state,
            users: [],
            error: '',
            loading: true,
        };
        case FETCH_USERS_SUCCESS: return {
            ...state,
            users: action.payload,
            error: '',
            loading: false,
        };
        case FETCH_USERS_FAILURE: return {
            ...state,
            users: [],
            error: action.payload,
            loading: false,
        };
        default: return { ...state };
    }
}
//Async Action Creator
// thunk allows Action Creator to return fucntiion
const usersFetch = (uri) => (dispatch) => { //the function will recive dispatch function
    dispatch(usersRequest());
    axios.get(uri)
        .then((response) => {
            const users = response.data.map(ele => ({ id: ele.id, username: ele.username }))
            dispatch(usersSuccess(users))
        })
        .catch((error) => {
            dispatch(usersFailure(error.message))
        })
}
// Create Store
const store = createStore(reducer, applyMiddleware(thunk));
const { users, ...rest } = store.getState();
console.log('Initial State:');
console.log(rest);
console.table(users);
const unsubscribe = store.subscribe(() => {
    const { users, ...rest } = store.getState();
    console.log('Updated State:');
    console.log(rest);
    console.table(users);
});
store.dispatch(usersFetch('https://jsonplaceholder.typicode.com/users'));
store.dispatch(usersFetch('https://jsonplaceholder.typicode.com/user'));
// unsubscribe();
