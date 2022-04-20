import React from 'react'
import "./Login.scss"
import { CgProfile } from "react-icons/cg";
function Login() {
  return (
    <div className='containerrr'>
      <div className='under-container'>
      <div className='login-icon'><CgProfile/></div><br/>
      <br/>
      <br/>
      
      
        <h1 className='heading'>Login</h1>
        <input
        className='input-email'
        placeholder='enter your mail' 
        type='email' /><br/>

        <input
        type='password'
        placeholder='enter your password'
        className='input-password' 
        />
        <div>
          <button className='btn'>Login</button>
        </div>
        </div>

    </div>
  )
}

export default Login