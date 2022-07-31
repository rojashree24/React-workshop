import React, { useState } from "react";
import './login.css';
import TextInput from '../TextInput/TextInput';
import CustomButton from "../CustomButton/CustomButton";
import HeaderBar from "../HeaderBar/HeaderBar";
import image from '../../resources/images/logo.png';

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
                <img src={image} />
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