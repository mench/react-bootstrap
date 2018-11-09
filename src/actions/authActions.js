import {LOGIN} from "./types";
import jwt from "jsonwebtoken";
import axios from "axios";

export const login = (email,password) => dispatch => {
    axios.post('http://localhost:8000/api/login',JSON.stringify({
        email:email,
        password:password
    }))
        .then(res => dispatch({
            type:LOGIN,
            payload: res.data.body.token
        }));
}