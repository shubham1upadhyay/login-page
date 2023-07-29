/* eslint-disable no-unused-vars */
import React from 'react'
import axios from 'axios';
import { useContext } from 'react';
import CreateContext from '../context/CreateContext';
import { useState ,useEffect } from 'react';
import "../index.css"


 let userdata = JSON.parse(localStorage.getItem('userdata'));


let userId =JSON.parse(localStorage.getItem('userId'));

console.log(userId) ;


const Profile = () => {
      const [userData,setUserData] = useState() ; 

    let {userId,setUserId} = useContext(CreateContext) ;

      async function fetchdata(){
        
          let responce = await axios.get(`https://dummyjson.com/users/${userId}`).then(resp=>resp).catch(error => console.log(error)) ;
          console.log(responce.data) ;
          setUserData(responce.data) ;
        
      }
  
    useEffect(()=>{
      fetchdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  console.log(userData) ;

  return (
    <div className='profile-container'>
     {
          userData &&
          <>
              <div className='left'>
                <h4>Id :{userData.id}</h4>
                <h4>firstName : {userData.firstName}</h4>
                <h4>lastName :{userData.lastName}</h4>
                <h4>maidenName :{userData.maidenName}</h4>
                <h4>age : {userData.age}</h4>
                <h4>gender : {userData.gender}</h4>
                <h4>email : {userData.email}</h4>
                <h4>DOB  :{userData.birthDate}</h4>
              </div>

              <div className='right'>
                  <img src={userData.image} alt='png'/>
              </div>
           </>
       }
    </div>
  )
}

export default Profile