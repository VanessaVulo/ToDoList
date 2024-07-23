import React from 'react';

const Notepad = ({ children }) => {
  return (
    <div className="notepad p-6 bg-purple-200 rounded shadow-md">
      {children}
    </div>
  );
};

export default Notepad;