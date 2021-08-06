import React from 'react'
import './Preloader.css'

const Preloader = ({ loader }) => {
  return (
    <div className={`preloader ${loader ? 'preloader_active' : ''}`}>
      <div className='preloader__container'>
        <span className='preloader__round'></span>
      </div>
    </div>
  );
};

export default Preloader
