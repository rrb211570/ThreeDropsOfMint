import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Login.css'

function Login({ }) {
    let nav = useNavigate();
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const [signUpUsername, setSignUpUsername] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');
    const [signUpPassword2, setSignUpPassword2] = useState('');

    useEffect(() => {

    }, []);

    const revealLogin = () => {

    }

    const login = () => {
        nav('/loadingScreen');
    }

    const revealSignUp = () => {

    }

    const changeSignUpPassword = (val) => {
        setSignUpPassword(val);
    }

    const changeSignUpPassword2 = (val) => {
        setSignUpPassword2(val);
    }

    const signUp = () => {
        nav('/loadingScreen');
    }

    return (
        <div id='userAccount'>
            <button onClick={revealLogin}>Login</button>
            <div id='userAccount__logIn'>
                <input type='text' placeholder='Username' value={loginUsername} onChange={(e) => { setLoginUsername(e.target.value) }} />
                <input type='text' placeholder='Password' value={loginPassword} onChange={(e) => { setLoginPassword(e.target.value) }} />
                <button onClick={login}>Submit</button>
            </div>
            <div>or</div>
            <button onClick={revealSignUp}>SignUp</button>
            <div id='userAccount__signUp'>
                <input type='text' placeholder='Email' value={signUpUsername} onChange={(e) => { setSignUpUsername(e.target.value) }} />
                <input type='text' placeholder='Password' value={signUpPassword} onChange={(e) => { changeSignUpPassword(e.target.value) }} />
                <input type='text' placeholder='Confirm Password' value={signUpPassword2} onChange={(e) => { changeSignUpPassword2(e.target.value) }} />
                <button onClick={signUp}>Submit</button>
            </div>
        </div>
    );
}

export default Login;