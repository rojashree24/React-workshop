import React, { useState } from "react";
import './login.css';
import TextInput from '../TextInput/TextInput';
import CustomButton from "../CustomButton/CustomButton";
import HeaderBar from "../HeaderBar/HeaderBar";

const Login=({name})=>{

    const [userName,setUserName]=useState(""); //statevariable statefunction
    const [password,setPassword]=useState("");

    return(
    <>
            <HeaderBar />
            <div className="main-container login-page">
        <div className="login-background">
        </div>
        <div className="login-form">
            <div className="app-logo">
                <img src="data:image/png;base64,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" />
            </div>
            <form className="login-form" action="">
                <h1>Sign In</h1>
                <div className="form-field">
                    
                  <TextInput type="text" className="username" placeholder="Username" value={userName} onChange={(event)=>{
                    setUserName(event.target.value)
                  }}/>
                </div>
                <div className="form-field">
                    <TextInput type="password" className="password" placeholder="Password" value={password} onChange={(event)=>{
                        setPassword(event.target.value)
                    }} />
                </div>
                <div className="form-field">
                    <button class="app-button" type="submit">LOGIN</button>
                </div>
                <div className="forgot-password-container">
                    <span className="forgot-password">Forgot Password?</span>
                    <a className="link" href="">Click Here</a>
                </div>
            </form>
        </div>
    </div>
        
        
        
        {/* <CustomButton
            className="primary"
            type="submit"
            value="Login" /> */}
    </>
    )
        };

export default Login;