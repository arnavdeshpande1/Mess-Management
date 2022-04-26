import './App.css';
import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Navbar } from './component/layouts/Navbar';
import { Landing } from './component/layouts/Landing';
import Register  from './component/auth/Register';
import  Login  from './component/auth/Login';
import Alert from './component/layouts/Alert';


// Redux
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/serAuthToken';
import { loadUser } from './actions/auth';

if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return(

    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <br/><br/><br/>
          <Alert />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </Fragment>
      </Router>
    </Provider>
)};
export default App;
