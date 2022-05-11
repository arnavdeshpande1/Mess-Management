import './App.css';
import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

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
import AddDeleteTableRows from './addTable/addDeleteTable';
import Additem from './addTable/Additem';
import Showdata from './component/dashboard/Showdata';
import Showcomment from './component/dashboard/Showcomment';
import Addcomment from './addTable/Addcomment';
import { FirstPage } from './component/layouts/FirstPage';
import AdminSecondPage from './component/layouts/AdminSecondPage';
import { Landing1 } from './component/layouts/Landing1';
import { Landing2 } from './component/layouts/Landing2';

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
          <Alert />
          <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="dashboard" element={<PrivateRoute component={Dashboard} />} />
            <Route path="admindashboard" element={<PrivateRoute component={adminDashboard} />} />
            <Route path="create-profile" element={<PrivateRoute component={CreateProfile} />} />
            <Route path="admin_login" element={<Admin />} />
            <Route path="admin_register" element={<AdminReg />} />
            <Route path="add" element={<addColumn />} />
            <Route path="add_delete" element={<AddDeleteTableRows />} />
            <Route path="add_item" element={<Additem />} />
            <Route path="show_data" element={<Showdata />} />
            <Route path="show_comment" element={<Showcomment />} />
            <Route path="add_comment" element={<Addcomment />} />
            
            {/* <Route path="homepage" element={<FirstPage />} /> */}
            <Route path="verification" element={<AdminSecondPage />} />
            <Route path="admin_landing" element={<Landing1 />} />
            <Route path="user_landing" element={<Landing2 />} />
          </Routes>
        </Fragment>
      </Router>
    </Provider>
)};
export default App;
