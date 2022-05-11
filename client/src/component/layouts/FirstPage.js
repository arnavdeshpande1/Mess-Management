import React from 'react'
import { Link} from 'react-router-dom'


export const FirstPage = () => {


  return (
    <section className="landing">
    <div className="dark-overlay">
      <div className="landing-inner">
        <h1 className="x-large">Mess Management</h1>
        <p className="lead">
          Start Managing your <b>Business</b> in smart way
        </p>
        <div className="buttons">
          <Link to="/admin_landing" className="btn btn-primary">Admin</Link>
          <Link to="/user_landing" className="btn btn-primary">User</Link>
        </div>
      </div>
    </div>
  </section>
  )
}

export default FirstPage;
