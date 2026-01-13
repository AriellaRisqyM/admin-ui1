import React from 'react';

const CardExpen = ({ children, className = "" }) => {
  return (
    <div className={` rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full ${className}`}>
      {children}
    </div>
  );
};

export default CardExpen;