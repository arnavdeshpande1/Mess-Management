// import React, { Fragment, useState } from 'react'
// import { Navigate } from 'react-router-dom';

// export const AdminSecondPage = () => {

//   const [formData,setFormData] = useState({
//     pass:""
//   });

//   const {pass} = formData;

//   const onChange = e => setFormData({
//     ...formData, [e.target.name]:e.target.value
//   });
//   console.log(pass)
//   const onSubmit = e => {
//     e.preventDefault();
    
//     // if(pass === "123456"){
        
//     //     return <Navigate to="/admin_landing" />;
//     // }
//     // else{
//     //     return <Navigate to="/" />;

//     // }
//     return <Navigate to="/admin_landing" />;
//   };

//   return (
//     <Fragment>
//         <br/>
//       <h1 className="large text-primary">Verification</h1>
//       <form className="form" onSubmit={onSubmit}>
//         <div className="form-group">
//           <input type="String" placeholder="Password" name="pass" value={pass}  onChange={e=>onChange(e)} required />
//         </div>
//         <input type="submit" className="btn btn-primary" value="Verify" />
//       </form>
//     </Fragment>
//   )
// }

// export default AdminSecondPage;

import React, { Fragment, useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export const AdminSecondPage = ({ login,isAuthenticated }) => {

  const [formData,setFormData] = useState({
    password:''
  });

  const {password} = formData;

  const onChange = e => setFormData({
    ...formData, [e.target.name]:e.target.value
  });

  const onSubmit = e => {
    e.preventDefault();
    // verification(password);
    console.log(password)
    if(password === "123456"){
        <Navigate to="/dashboard" />;
    }
  };

  

  return (
    <Fragment>
      <h1 className="large text-primary">Verification</h1>
      <form className="form" onSubmit={onSubmit}>
       
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password} onChange={e=>onChange(e)} required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Verify" />
      </form>
      
    </Fragment>
  )
}

// AdminSecondPage.propTypes = {
//   login:PropTypes.func.isRequired,
//   isAuthenticated: PropTypes.bool
// // }

// const mapStateToProps = (state) => ({
//   isAuthenticated: state.auth.isAuthenticated
// });


export default AdminSecondPage;