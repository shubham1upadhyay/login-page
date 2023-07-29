// src/components/Profile.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserProfile } from '../store/actions';

const Profile = () => {
  const user = useSelector((state) => state.user);
  const userProfile = useSelector((state) => state.userProfile);
  const dispatch = useDispatch();

  useEffect(() => {
    if(user) {
      fetch(`https://dummyjson.com/users/${user.id}`)
        .then((res) => res.json())
        .then((profileData) => {
          dispatch(setUserProfile(profileData));
        })
        .catch((error) => {
          console.error('Error fetching profile:', error);
        });
    }
  }, [user, dispatch]);

  return (
    <div>
      {userProfile ? (
        <>
          <h2>Profile Page</h2>
          <p>Name: {userProfile.name}</p>
          <p>Email: {userProfile.email}</p>
          <p>Address: {userProfile.address}</p>
        </>
      ) : (
        <p className='p-3 loading fw-bolder text-danger fs-3'>Loading...</p>
      )}
    </div>
  );
};

export default Profile;