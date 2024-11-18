import React from 'react';
import { FaRocket, FaPaintBrush, FaHeadset } from 'react-icons/fa';

const Features = () => {
  const features = [
    { title: "Speed", color: "bg-yellow-400", icon: <FaRocket />, description: "Fast performance with optimized code." },
    { title: "Design", color: "bg-red-400", icon: <FaPaintBrush />, description: "Beautiful and responsive layouts." },
    { title: "Support", color: "bg-blue-400", icon: <FaHeadset />, description: "Help is available 24/7 for any queries." },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800 drop-shadow-sm">Our Amazing Features</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature, index) => (
            <div key={index} className={`p-8 rounded-lg shadow-2xl ${feature.color} w-80 hover:scale-105 transform transition duration-300 ease-out`}>
              <div className="text-5xl text-white mb-4">
                {feature.icon}
              </div>
              <h3 className="text-3xl font-semibold mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-200">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
