import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='Header'>
      {/* <h4>Today is ...</h4> */}
      <h1>{new Date().toDateString()} 🎀</h1>
    </div>
  );
};

export default Header;
