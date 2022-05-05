import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './ActionTypes';
const initialUsersState = {
    loading: false,
    users: [],
    error: '',
};
const reducer = (state = initialUsersState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST: return {
            ...state,
            loading: true,
            error: '',
        };
        case FETCH_USERS_SUCCESS: return {
            ...state,
            loading: false,
            error: '',
            users: action.payload,
        };
        case FETCH_USERS_FAILURE: return {
            ...state,
            loading: false,
            users: [],
            error: action.payload,
        };
        default:
            return { ...state };
    }
};
export default reducer;