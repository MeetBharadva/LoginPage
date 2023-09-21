import React, { useState } from 'react'
import './Login.css'
import PasswordRoundedIcon from '@mui/icons-material/PasswordRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

const Login = () => {
  const [action,setAction]= useState("Login");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Login"?<div></div>:      <div className="input">
        <AccountBoxRoundedIcon />
          <input type='text' placeholder=' Name'/>
        </div>}
        <div className="input">
          <p><EmailRoundedIcon /></p>
          <input type='email' placeholder=' Email'/>
        </div>
        <div className="input">
          <PasswordRoundedIcon />
          <input type='password' placeholder=' Password' />
        </div> 
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost password?<span>Click Here</span></div>}
      <div className="submit-container">
        <div className={action==="Login"?"submit grey":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit grey":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    </div>
  )
}

export default Login
