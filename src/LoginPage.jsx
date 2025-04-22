import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AuthPage.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/login", { email, password })
            .then(result => {
                if (result.data === "success") {
                    toast.success('Login successful! Redirecting...');
                    setTimeout(() => {
                        navigate('/HomePage');
                    }, 3000); 
                } else {
                    toast.error('Login failed. Please check your credentials.');
                }
            })
            .catch(err => {
                toast.error('An error occurred. Please try again later.');
                console.error("Error:", err);
            });
    };

    return (
        <div 
            className="login-page" 
            style={{ 
                background: `url('bcycle.jpg') no-repeat center center fixed`,
                backgroundSize: 'cover',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <div className="auth-container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Email:
                        <input
                            type="email"
                            
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type="password"
                            
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <div className='lb'>
                        <button type="submit">Login</button>
                    </div>
                </form>
                <p className="signup-link">
                    Don't have an account? <Link to="/SignUp">Sign up here</Link>
                </p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default LoginPage;
