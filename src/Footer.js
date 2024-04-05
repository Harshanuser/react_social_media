import React from 'react'

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className='Footer'>
      <p>
        <h3>Copyright © {year} </h3>
      </p>
    </footer>
  );
};

export default Footer;

