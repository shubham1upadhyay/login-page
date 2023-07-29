/* eslint-disable no-unused-vars */
import React from 'react';
import "../styles/Login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useContext} from 'react' ;
import CreateContext from '../context/CreateContext';
 import { useNavigate } from 'react-router';

const LoginPage = ()=>{

  let {userId,setUserId} = useContext(CreateContext) ;

  let navigate = useNavigate() ;

  let userdata = {} ;

 async function proceed(e){
  e.preventDefault();
     let email = document.getElementById('email') ;
     let password = document.getElementById("password") ;

     if(email.value==="" || password.value ===""){
         alert("fill all details") ;
         return ;
     }

     let evalue = email.value ;
     let pvalue = password.value ;
     console.log(evalue+"   "+pvalue) ;
     try{
         let resp = await fetch('https://dummyjson.com/auth/login', {
             method: 'POST',
             headers: { 'Content-Type': 'application/json' },
             body: JSON.stringify({
             username:evalue,
             password:pvalue,
             })
             })
             .then(res => {
                 return res.json()})
             .catch(error => console.log(error));

             var userId = resp.id ;
                 console.log(userId) ;
                  setUserId(userId) ;
                  navigate("profile") ;
     }
     catch(error){
         console.log(error)
     }
 }

    return(
        <>
        <div className='dad'>
           <div className='form-container'>
           <div className='card' style={{border:"2px orange solid"}}>
            <div className='header'>
                <p>Welcome Back! <span> 👋</span></p>
                <h4>Sign in to your account</h4>
            </div>
            <div className='card-body'>
                <form>
                <label className='form-label mt-3'>
                    Your Username
                </label>
                <input className='form-control' type='text' name='email' id='email'
                />

                <label className='form-label mt-3'>
                    Password
                </label>
                <input className='form-control' type='password' name='password' id='password' 
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
        </div>
        
        </>
    );
}

export default LoginPage;