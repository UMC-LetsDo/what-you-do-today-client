import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Logo</div>
        <nav className="space-x-4 flex row-auto">
          <Link to="/" className="text-white hover:underline">
            Home
          </Link>
          <Link to="/wydt" className="text-white hover:underline">
            wydt
          </Link>
          <Link to="/rwyot" className="text-white hover:underline">
            rwyot
          </Link >
          <Link to="/pt" className="text-white hover:underline">
            pt
          </Link>
        </nav>
        <button className="border border-black border-solid rounded-full py-2 px-4 hover:bg-gray-200">Login</button>
      </div>
    </header>
  );
};

export default Header;