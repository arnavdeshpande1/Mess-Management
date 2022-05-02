import './App.css';
import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import  Navbar  from './component/layouts/Navbar';
import { Landing } from './component/layouts/Landing';
import Register  from './component/auth/Register';
import  Login  from './component/auth/Login';
import Alert from './component/layouts/Alert';
import Dashboard from './component/dashboard/Dashboard';
import PrivateRoute from './component/routing/PrivateRoute';
import CreateProfile from './component/profile-forms/CreateProfile';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/serAuthToken';
import { loadUser } from './actions/auth';
import Admin from './component/auth/Admin.js';
import AdminReg from './component/auth/AdminReg';
import adminDashboard from './component/dashboard/adminDashboard';
import addColumn from './component/dashboard/addColumn';

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
            <Route path="dashboard" element={<PrivateRoute component={Dashboard} />} />
            <Route path="admindashboard" element={<PrivateRoute component={adminDashboard} />} />
            <Route path="create-profile" element={<PrivateRoute component={CreateProfile} />} />
            <Route path="admin_login" element={<Admin />} />
            <Route path="admin_register" element={<AdminReg />} />
            <Route path="add" element={<addColumn />} />
          </Routes>
        </Fragment>
      </Router>
    </Provider>
)};
export default App;
