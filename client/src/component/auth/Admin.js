import React, { Fragment, useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { admin_login } from '../../actions/auth';


export const AdminLogin = ({ admin_login,isAuthenticated }) => {

  const [formData,setFormData] = useState({
    email:'',
    password:''
  });

  const {email,password} = formData;

  const onChange = e => setFormData({
    ...formData, [e.target.name]:e.target.value
  });

  const onSubmit = e => {
    e.preventDefault();
    admin_login(email,password);
  };

  //Redirect if admin looged in
  if (isAuthenticated) {
    // console.log(1);
    return <Navigate to="/admindashboard" />;
  }

  return (
    <Fragment>
      <h1 className="large text-primary">Admin Sign In</h1>
      <p className="lead"><i className="fas fa-user"></i> Log Into Your Account</p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" value={email}  onChange={e=>onChange(e)} required />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password} onChange={e=>onChange(e)} required
            minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/admin_register">Sign UP</Link>
      </p>
    </Fragment>
  )
}

AdminLogin.propTypes = {
  admin_login:PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});


export default connect(mapStateToProps, { admin_login })(AdminLogin);