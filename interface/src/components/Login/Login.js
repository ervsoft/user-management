import React, { useState, useContext, createContext } from 'react';
import PropTypes from 'prop-types';
import './Login.css';

async function loginUser(credits) {
  return fetch('http://192.168.1.105:3005/api/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credits)
  })
    .then(data => data.json())
}

export default function Login({ setToken }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password
    });
    setToken(token);



  }


  return (
    <main className="form-signin">
      <form onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 fw-bolder text-center">JustLend</h1>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            name="email"
            placeholder='email'
            onChange={e => setEmail(e.target.value)}
          />

          <label for="floatingInput">Email address</label>
        </div>
        <br />
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="current password"
            onChange={e => setPassword(e.target.value)}
          />
          <label for="floatingPassword">Password</label>
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>


        <button className="w-100 btn btn-lg btn-primary">Sign in</button>


      </form>
      <br />

    </main>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};