import React from 'react'

export const Landing = () => {
  return (
    <section className="landing">
    <div className="dark-overlay">
      <div className="landing-inner">
        <h1 className="x-large">Mess Management</h1>
        <p className="lead">
          Start Managing your <b>Business</b> eyes in smart way
        </p>
        <div className="buttons">
          <a href="register.html" className="btn btn-primary">Sign Up</a>
          <a href="login.html" className="btn btn-light">Login</a>
        </div>
      </div>
    </div>
  </section>
  )
}
