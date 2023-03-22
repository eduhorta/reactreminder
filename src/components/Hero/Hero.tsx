import React from 'react';
import heroImage from '../../assets/images/Hero.png';

function Hero() {
  return (
    <div
      className="h-[22rem] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {' '}
    </div>
  );
}

export default Hero;
