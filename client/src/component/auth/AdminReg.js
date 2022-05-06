import React, { Fragment, useState } from 'react'
import { Link,Navigate } from 'react-router-dom';

import { connect } from 'react-redux';
import { setAlert } from '../../actions/alerts';
import { admin_register } from '../../actions/auth';
import PropTypes from 'prop-types'

export const AdminReg = ({setAlert,admin_register,isAuthenticated}) => {

  const [formData,setFormData] = useState({
    name:'',
    email:'',
    password:'',
    password2:''
  });

  const {name,email,password,password2} = formData;

  const onChange = e => setFormData({
    ...formData, [e.target.name]:e.target.value
  });

  const onSubmit = e => {
    e.preventDefault();
    if(password!==password2){
        setAlert("Passwords do not match",'danger');
    }
    else{
      admin_register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/admindashboard" />;
  }

  return (
    <Fragment>
      <h1 className="large text-primary">Admin Sign Up</h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input type="text" placeholder="Name" name="name" value={name} onChange={e=>onChange(e)} 
          // required 
          />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" value={email}  onChange={e=>onChange(e)}
          //  required 
           />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password} onChange={e=>onChange(e)} 
            // required
            // minLength="6"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2} onChange={e=>onChange(e)} 
            // required
            // minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Admin Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/admin_login">Sign In</Link>
      </p>
    </Fragment>
  )
}

AdminReg.propTypes = {
  setAlert: PropTypes.func.isRequired,
  admin_register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps,{ setAlert,admin_register })(AdminReg);