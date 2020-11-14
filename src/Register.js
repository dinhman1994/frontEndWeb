import React, { useState } from 'react';
import './Register.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Register() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [reTypePassword, setReTypePassWord] = useState('');

    const register = e => {
        console.log('Registered');
    } 

    return (
        <div className='register'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
            </Link>

            <div className='login__container'>
                <h1>Register</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <h5>ReTypePassword</h5>
                    <input type='password' value={reTypePassword} onChange={e => setReTypePassWord(e.target.value)} />

                    <button type='submit' onClick={register} className='login__signInButton'>Register</button>
                </form>

                <Link to='/login'>
                    <button onClick={register} className='login__registerButton'>You already have account</button>
                </Link>
            </div>
        </div>
    )
}

export default Register;
