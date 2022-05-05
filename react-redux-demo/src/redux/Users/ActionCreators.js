import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './ActionTypes';
import axios from 'axios'

export const userRquest = () => ({
    type: FETCH_USERS_REQUEST,
})
export const userSuccess = (users) => ({
    type: FETCH_USERS_SUCCESS,
    payload: users,
})
export const userFailure = (message) => ({
    type: FETCH_USERS_FAILURE,
    payload: message,
})
// async action
export const fetchUser = () => {
    return (dispatch) => {
        dispatch(userRquest());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data.map(ele => ({ userName: ele.username, id: ele.id }));
                dispatch(userSuccess(users));
            })
            .catch(error => dispatch(userFailure(error.message)))
    }
}