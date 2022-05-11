import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCurrentProfile } from '../../actions/profile'
import Spinner from '../layouts/Spinner'
import { Fragment } from 'react'
import { Link,Navigate } from 'react-router-dom'
import addColumn from './addColumn'
import AddDeleteTableRows from '../../addTable/addDeleteTable'

const adminDashboard = ({
    getCurrentProfile,
    auth:{admin},
    profile:{loading,profile}
  }) => {
    // useEffect(() => {
    //   getCurrentProfile();
    // }, [getCurrentProfile]);

    return loading ? <Spinner/> : 
        <Fragment>
        
        <h1 className="large text-primary">Admin Dashboard</h1>
        <p className="lead">
            <i className="fas fa-user" /> Welcome
        </p>
        <br/>
        <div className="buttons">
        <Link to="/add_item" className="btn btn-primary">Add In the Table</Link>
        </div>
        </Fragment>;
};

adminDashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    // deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
  };
  
const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps,{getCurrentProfile})(adminDashboard);