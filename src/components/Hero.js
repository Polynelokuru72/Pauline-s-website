import React from 'react';

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center" 
      style={{ backgroundImage: 'url(https://source.unsplash.com/random/1600x900/?nature)' }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-purple-700 via-pink-500 to-transparent opacity-90"></div>
      <div className="relative z-10 text-center flex flex-col justify-center items-center h-full text-white px-6">
        <h2 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
          Discover the Vibrant World
        </h2>
        <p className="text-2xl text-gray-200 mb-10 drop-shadow-md max-w-xl mx-auto">
          Embrace the colors, explore the possibilities with endless style.
        </p>
        <div className="space-x-4">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full shadow-xl transform hover:scale-110 transition duration-300 ease-out">
            Get Started
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-xl transform hover:scale-110 transition duration-300 ease-out">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
