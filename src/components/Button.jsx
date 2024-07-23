import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button 
      onClick={onClick}
      className="px-4 py-2 bg-purple-800 text-white rounded hover:bg-purple-900"
    >
      {children}
    </button>
  );
};

export default Button;