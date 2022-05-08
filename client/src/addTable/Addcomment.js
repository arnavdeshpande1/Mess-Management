
import axios from 'axios';
import React, { Fragment, useState } from 'react'
import {API} from '../config'


export const Addcomment = () => {

  const [formData,setFormData] = useState({
    mess:'',
    comment:''
  });

  const {mess,comment} = formData;

  const onChange = e => setFormData({
    ...formData, [e.target.name]:e.target.value
  });

  const onSubmit = e => {
    e.preventDefault();
    const config = {
        headers : {
            'Content-Type' : 'application/json'
        }
    }
    axios.post(`${API}/commentsection`,formData,config).then(res =>{
        alert("post successful");
    }).catch(err => alert(err));
    // menu_item(mess,item);
  };

//   //Redirect if looged in
//   if (isAuthenticated) {
//     // console.log(0);
//     return <Navigate to="/dashboard" />;
//   }

  return (
    <Fragment>
      <h1 className="large text-primary">Write Comment</h1>
      <form className="form" onSubmit={onSubmit}>
        
        <div className="form-group">
          <input type="text" placeholder="Write Mess Name" name="mess" value={mess}  onChange={e=>onChange(e)} required />
        </div>
        
        <div className="form-group">
          <input type="text" placeholder="Write Your Comment Here" name="comment" value={comment}  onChange={e=>onChange(e)} required />
        </div>
        
        <input type="submit" className="btn btn-primary" value="save" />
      </form>
      
    </Fragment>
  )
}

// Addcomment.propTypes = {
//   login:PropTypes.func.isRequired,
//   isAuthenticated: PropTypes.bool
// }

// const mapStateToProps = (state) => ({
//   isAuthenticated: state.auth.isAuthenticated
// });


export default Addcomment;