import { LOGIN } from "../actions/types";
import jwt from 'jsonwebtoken';

const initialState = {
    auth: {
        user: null,
        jwtToken: null,
        isAuthenticated:false
    }
};
export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return{
                ...state,
                auth: {
                    isAuthenticated: true,
                    jwtToken: action.payload
                },

            };
        default:
            return state
    }
}