import './App.css';
import React from 'react';
import LoginPage from './components/LoginPage';
import Profile from './components/Profile';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => state.user);

  return (
   <div>
      {!user ? <LoginPage /> : <Profile />}
    </div>

  );
}

export default App;
