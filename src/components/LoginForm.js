import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const projectID = 'd84a1bc3-b106-4f69-8318-8eba3622ece7';

const LoginForm = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    return (
        <div className='wrapper'>
           <div className="form">
            <h1 className='title'>Chat Application</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' value={userName} 
                onChange={ (e) => setUserName(e.target.value)} className='input' 
                placeholder='Username' required />

                <input type='password' value={password} 
                onChange={ (e) => setPassword(e.target.value)} className='input' 
                placeholder='Password' required />

            </form>
           </div>
        </div>
    )
}

export default LoginForm;