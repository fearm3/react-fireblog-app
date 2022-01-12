import {
    SET_LOADING_TRUE,
    SET_LOADING_FALSE
} from '../types/appTypes';

const initialState = {
    loading: false,
}

export const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_LOADING_TRUE:
            return {
                ...state,
                loading: true,
            };
        case SET_LOADING_FALSE:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}

export default authReducer;