import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ toggler }) => {
  return (
    <header className='px-6 py-2 bg-neutral-900 text-cyan-50'>
      <nav className='flex justify-between'>
        <div className='logo'>
          <a href='/'>
            <h2 className='text-2xl text-primary'>Logo</h2>
          </a>
        </div>
        <ul className='flex gap-4'>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/'>About</a>
          </li>
          <li>
            <a href='/'>Services</a>
          </li>
        </ul>
        <ul className='flex gap-2'>
          <div
            className='toggler-theme w-6 h-6 bg-slate-800 text-center hover:cursor-pointer'
            onClick={toggler}
          >
            T
          </div>
          <li>
            <a href='/'>Sign up</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  toggler: PropTypes.func,
};

export default Navbar;
