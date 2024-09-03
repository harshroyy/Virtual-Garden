import React from 'react'

const Loader = () => {
  return (
    <div className="flex gap-2">
      <div className="w-4 h-4 rounded-full animate-pulse bg-green-600"></div>
      <div className="w-4 h-4 rounded-full animate-pulse bg-green-600"></div>
      <div className="w-4 h-4 rounded-full animate-pulse bg-green-600"></div>
    </div>
  );
};

export default Loader;
