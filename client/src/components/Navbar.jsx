import React, { useState } from 'react';
import './../App.css'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  // State to manage mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-logo">MyBrand</div>
      
     
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><button onClick = {()=>{navigate('/login')}}>Login</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
