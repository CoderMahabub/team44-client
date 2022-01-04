import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import TopBar from '../Shared/TopBar/TopBar';
import { Context } from '../../context/Context';
import axios from 'axios';

const Login = () => {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);

    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            })
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" });
        }
    };
    return (
        <>
            <TopBar />
            <div className="login">
                <span className="loginTitle">Login</span>
                <form className="loginForm" onSubmit={handleLogin}>
                    <label>Username</label>
                    <input
                        className="loginInput"
                        type="text"
                        placeholder="Enter your username..."
                        ref={userRef}
                    />
                    <label>Password</label>
                    <input
                        className="loginInput"
                        type="password"
                        placeholder="Enter your password..."
                        ref={passwordRef}
                    />
                    <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
                </form>
                <button className="loginRegisterButton"><Link to="/register" className='link'>Register</Link></button>
            </div>
        </>
    );
};

export default Login;