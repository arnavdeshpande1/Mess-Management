import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

export const Landing1 = ({ isAuthenticated }) => {

  if(isAuthenticated){
    return <Navigate to="/adminDashboard" />;
  }

  return (
    <section className="landing">
    <div className="dark-overlay">
      <div className="landing-inner">
        <h1 className="x-large">Mess Management</h1>
        <p className="lead">
          Start Managing your <b>Business</b> in smart way
        </p>
        <div className="buttons">
          <Link to="/admin_register" className="btn btn-primary">Admin Sign Up</Link>
          <Link to="/admin_login" className="btn btn-primary">Admin Login</Link>
        </div>
      </div>
    </div>
  </section>
  )
}

Landing1.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing1);
