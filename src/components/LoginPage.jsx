import React from 'react';
import "../styles/Login.css";
import { useDispatch } from 'react-redux';
import { loginSuccess, loginFailure, setUserProfile } from '../store/actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Profile from './Profile';

const LoginPage = ()=>{

  const [username, setUsername] = useState('');
  const [password, setPass] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const dispatch = useDispatch(); 

  const proceed = (e) => {
    e.preventDefault();

    
fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    
    username,
    password,
  })
})
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.email);
        if(data.status==='success' || data.username===username) {
          setLoggedIn(true);
          dispatch(loginSuccess(data.user));
          console.log(loginSuccess(data.user))
          fetch(`https://dummyjson.com/users/${data.user.id}`)
            .then((res) => res.json())
            .then((profileData) => {
              dispatch(setUserProfile(profileData));
              
              console.log(setUserProfile(profileData))
            });
        } else {
          alert("Invalid Credential, Please Check!");
          dispatch(loginFailure(data.message));
        }
      })
      .catch((error) => {
        dispatch(loginFailure(error));
      });
  };

  function handleLogout(){
    setLoggedIn(false);
    setUsername('');
    setPass('');
  }

    return(
        <>
        <div className='dad'>
        {loggedIn ? (
         <>
         <button className='logout btn btn-dark' onClick={handleLogout}>Log Out</button>
         <Profile />
         </>
        ) : (
           <div className='form-container'>
           <div className='card' style={{border:"2px orange solid"}}>
            <div className='header'>
                <p>Welcome Back! <span> 👋</span></p>
                <h4>Sign in to your account</h4>
            </div>
            <div className='card-body'>
                <form>
                <label className='form-label mt-3'>
                    Your Email
                </label>
                <input className='form-control' type='text' name='email' value={username}
                onChange={(e) => setUsername(e.target.value)}
                />

                <label className='form-label mt-3'>
                    Password
                </label>
                <input className='form-control' type='password' name='pass' value={password} 
                onChange={(e) => setPass(e.target.value)}
                />
                <button onClick={proceed} className='btn btn-primary w-100 mt-5'>Continue</button>
                </form>
                <div className='text-center mt-4'>
                <a href='/'>Forgot Password?</a>
                </div>
            </div>
           </div>

           <div className='footer'>
            <p>Don't have an account?
                <a className='mx-2' href='/'>Register!</a>
            </p>
           </div>

           </div>
           )}
        </div>
        
        </>
    );
}

export default LoginPage;