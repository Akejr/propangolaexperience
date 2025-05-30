import React from 'react';
import logoImage from '../images/Logo.png';

const Logo: React.FC = () => {
  return (
    <div className="h-14">
      <img 
        src={logoImage}
        alt="Angola Experience"
        className="h-full w-auto"
      />
    </div>
  );
};

export default Logo;