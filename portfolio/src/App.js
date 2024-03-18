import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer'; // Corrected import path
import LandingPage from './components/LandingPage/LandingPage'; 

function App() {
  return (
    <Router>
      <div className="flex-container">
        {/* Removed Navbar */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Add other routes here */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;