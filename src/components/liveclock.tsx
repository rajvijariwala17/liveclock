import React, { useState, useEffect } from 'react';

const LiveClock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []); 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white font-mono p-4">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
        <h1 className="text-4xl font-bold mb-4 text-green-400">Live Clock</h1>
        <div className="text-6xl font-extrabold text-blue-400">
          {currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
        </div>
        <p className="mt-2 text-gray-400 text-lg">
          {currentTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>
    </div>
  );
};

export default LiveClock;