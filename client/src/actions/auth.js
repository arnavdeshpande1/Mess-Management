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
import { API } from "../config";
import setAuthToken from "../utils/serAuthToken";
import { Navigate } from "react-router-dom";

//Load User

export const loadUser = () => async (dispatch) => {
    
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }

    try {
        
        const res = await axios.get(`${API}/auth`);
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

//Load menu

export const loadmenu = () => async (dispatch) => {
    
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }

    try {
        
        const res = await axios.get(`${API}/menu`);
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
        const res = await axios.get(`${API}/authadmin`);
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
        const res = await axios.post(`${API}/users`,body,config);
    
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
        const res = await axios.post(`${API}/admin`,body,config);
    
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
        const res = await axios.post(`${API}/auth`,body,config);
    
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
        const res = await axios.post(`${API}/authadmin`,body,config);
    
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

//menu item add
// export const menu_item = ( mess,item ) => {
//     console.log("added")
//     const config = {
//         headers : {
//             'Content-Type' : 'application/json'
//         }
//     }
//     axios.post(`${API}/menu`,body,config).then(res =>{
//         alert("post successful");
//     }).catch(err => alert(err));
//     const body = JSON.stringify({mess,item});
    
// };

//Verification
export const verification = (password) => async dispatch =>{
    
    const config = {
        headers : {
            'Content-Type' : 'application/json'
        }
    }

    const body = JSON.stringify({password});

    try {
        const res = await axios.post(`${API}/auth`,body,config);
    
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
