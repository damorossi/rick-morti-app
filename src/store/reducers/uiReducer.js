import types from "../types";

const initialState = {
    isLoading: false,
};

export const uiReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.startLoading: 
            return {
                ...state,
                isLoading: action.payload.isLoading 
            };
        case types.finishLoading:
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        default:
            return state;
    }
}