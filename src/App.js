import React from 'react'
import "./index.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import LoginPage from './components/LoginPage';

console.log("app is working")
const App = () => {
  return (
    <div>
      <Router>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
    </Router>
    </div>
  )
}

export default App