import {
    REGISTER_SUCCESS,
    REGISTER_FAIL
    // USER_LOADED,
    // AUTH_ERROR,
    // LOGIN_SUCCESS,
    // //LOGIN_FAIL,
    // LOGOUT,
    // ACCOUNT_DELETED
  } from '../actions/types';
  
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
  };
  
  function authReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
    //   case USER_LOADED:
    //     return {
    //       ...state,
    //       isAuthenticated: true,
    //       loading: false,
    //       user: payload
    //     };
        case REGISTER_SUCCESS:
            localStorage.setItem('token',payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated:true,
                loading:false
            }
        case REGISTER_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                ...payload,
                isAuthenticated:false,
                loading:false
            }
    //   case LOGIN_SUCCESS:
    //     return {
    //       ...state,
    //       ...payload,
    //       isAuthenticated: true,
    //       loading: false
    //     };
    //   case ACCOUNT_DELETED:
    //   case AUTH_ERROR:
    //   case LOGOUT:
    //     return {
    //       ...state,
    //       token: null,
    //       isAuthenticated: false,
    //       loading: false,
    //       user: null
    //     };
      default:
        return state;
    }
  }
  
  export default authReducer;