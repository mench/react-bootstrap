import {LOGIN} from "./types";
import jwt from "jsonwebtoken";
import axios from "axios";

export const login = (email,password){
    return async (dispatch,getState)=>{
        const { data } = await axios.post('http://localhost:8000/api/login',JSON.stringify({ email,password }));
        dispatch({
            type:LOGIN,
            payload: data.body.token
        })
    }
}
