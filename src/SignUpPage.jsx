import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AuthPage.css';

const SignUpPage = () => {
    const [name, setName] = useState('');  
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/signup", { name, email, password })
            .then(result => {
                toast.success("Signup successful! Redirecting to login...");
                setTimeout(() => {
                    navigate('/login');
                }, 3000); 
            })
            .catch(err => {
                console.error(err);
                toast.error("Signup failed. Please try again.");
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
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        UserName:
                        <input
                            type="text"
                           
                            required
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
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
                        <button type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignUpPage;
