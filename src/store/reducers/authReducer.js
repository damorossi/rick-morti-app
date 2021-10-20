import types from "../types";

const initialState = {
    uid: '',
    name: 'unidentified',
    email: 'unidentifed'
}

export const authReducer = (state = initialState, action) => {
     switch(action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName,
                email: action.payload.displayName,
                token: action.payload.token
            }
        case types.logout:
            return {};
        default:
            return state;
     }
}