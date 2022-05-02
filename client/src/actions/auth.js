import axios from "axios"
// import api from '../utils/api';
import { setAlert } from './alerts';
import 
{ 
    REGISTER_SUCCESS, 
    ADMIN_REGISTER_SUCCESS,
    REGISTER_FAIL,
    ADMIN_REGISTER_FAIL,
    USER_LOADED,
    ADMIN_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_PROFILE 
} from "./types"

import setAuthToken from "../utils/serAuthToken";
import { Navigate } from "react-router-dom";

//Load User

export const loadUser = () => async (dispatch) => {
    
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }

    try {
        
        const res = await axios.get('/api/auth');
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        });
    }

  };


//Load Admin

export const loadAdmin = () => async (dispatch) => {
    
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }

    // try {
        
    //     dispatch({
    //         type: AUTH_ERROR
    //     });
    // } catch (err) {
        const res = await axios.get('/api/authadmin');
        dispatch({
            type: ADMIN_LOADED,
            payload: res.data
        });
        return <Navigate to="/admindashboard" />;
    // }

  };



//Register User
export const register = ({ name,email,password }) => async dispatch =>{
    const config = {
        headers : {
            'Content-Type' : 'application/json'
        }
    }

    const body = JSON.stringify({name,email,password});

    try {
        const res = await axios.post('/api/users',body,config);
    
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data
        });

        dispatch(loadUser());

      } catch (err) {
        const errors = err.response.data.errors;

        if(errors){
            errors.forEach(error => 
                dispatch(setAlert(error.msg,'danger'))); 
        }
        dispatch({
        type: REGISTER_FAIL
        });
      }
};


//Register Admin

export const admin_register = ({ name,email,password }) => async dispatch =>{
    const config = {
        headers : {
            'Content-Type' : 'application/json'
        }
    }

    const body = JSON.stringify({name,email,password});

    // try {
        const res = await axios.post('/api/admin',body,config);
    
        dispatch({
          type: ADMIN_REGISTER_SUCCESS,
          payload: res.data
        });

        dispatch(loadAdmin());

    //   }
    //    catch (err) {
    //     const errors = err.response.data.errors;

    //     if(errors){
    //         errors.forEach(error => 
    //             dispatch(setAlert(error.msg,'danger'))); 
    //     }
    //     dispatch({
    //     type: ADMIN_REGISTER_FAIL
    //     });
    //   }
        return <Navigate to="/admindashboard" />;
};




//Login User
export const login = (email,password) => async dispatch =>{
    const config = {
        headers : {
            'Content-Type' : 'application/json'
        }
    }

    const body = JSON.stringify({email,password});

    try {
        const res = await axios.post('/api/auth',body,config);
    
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data
        });

        dispatch(loadUser());

      } catch (err) {
        const errors = err.response.data.errors;

        if(errors){
            errors.forEach(error => 
                dispatch(setAlert(error.msg,'danger'))); 
        }
        dispatch({
        type: LOGIN_FAIL
        });
      }
};

//LOGOUT //clear profile

export const logout = () => dispatch => {
    dispatch({ type:LOGOUT });
    dispatch({ type:CLEAR_PROFILE });
};

//Login Admin
export const admin_login = (email,password) => async dispatch =>{
    const config = {
        headers : {
            'Content-Type' : 'application/json'
        }
    }

    const body = JSON.stringify({email,password});

    try {
        const res = await axios.post('/api/authadmin',body,config);
    
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data
        });

        dispatch(loadAdmin());

      } catch (err) {
        const errors = err.response.data.errors;

        if(errors){
            errors.forEach(error => 
                dispatch(setAlert(error.msg,'danger'))); 
        }
        dispatch({
        type: LOGIN_FAIL
        });
      }
};