import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import TopBar from '../Shared/TopBar/TopBar';

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post("/auth/register", {
                username,
                email,
                password
            });
            res.data && window.location.replace("/login")
        } catch (err) {
            setError(true)
        }
    }
    return (
        <>
            <TopBar />
            <div className="register">
                <span className="registerTitle">Register</span>
                <form className="registerForm" onSubmit={handleSubmit}>
                    <label>Username</label>
                    <input
                        className="registerInput"
                        type="text"
                        placeholder="Enter your username..."
                        onChange={e => setUsername(e.target.value)}
                    />
                    <label>Email</label>
                    <input
                        className="registerInput"
                        type="email"
                        placeholder="Enter your email..."
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label>Password</label>
                    <input
                        className="registerInput"
                        type="password"
                        placeholder="Enter your password..."
                        onChange={e => setPassword(e.target.value)}
                    />
                    {error && <span style={{ color: "red", marginTop: "10px", textAlign: "center" }}>Something Went Wrong</span>}
                    <button className="registerButton" type="submit">Register</button>
                </form>

                <button className="registerLoginButton"><Link to="/login" className='link'>LogIn</Link></button>
            </div>
        </>
    );
};

export default Register;