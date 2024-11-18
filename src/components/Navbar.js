import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 p-4">
      <div className="container mx-auto flex justify-between items-center text-white">
        <h1 className="text-2xl font-extrabold">🌈 My Colorful Site(Polyne)</h1>
        <div className="space-x-6">
          <a href="#home" className="hover:underline text-lg">Home</a>
          <a href="#features" className="hover:underline text-lg">Features</a>
          <a href="#contact" className="hover:underline text-lg">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
