// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

// Page Components
import Home from './pages/home'
import SignIn from './pages/signinwithGoogle'

function App() {
  return (
    <Router>
      <div className="p-4">
        {/* Navigation Links */}
        <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
          <Link to="/" className="text-lg font-bold">Home</Link>
          <Link to="/signin" className="text-lg font-bold">Sign In with Google</Link>
        </nav>


        <Routes>
         
          <Route path="/" element={<Home />} />
       
          <Route path="/signin" element={<SignIn />} />
         
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
