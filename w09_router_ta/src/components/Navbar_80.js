import { Link } from 'react-router-dom';
import React from 'react';

const Navbar_80 = () => {
  return (
    <nav className='navbar'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/products'>Products</Link>
      <Link to='/booklist'>Booklist</Link>
    </nav>
  );
};

export default Navbar_80;
