"use client";
import React, { useEffect, useState } from 'react';

const InteractiveOrb: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="fixed pointer-events-none z-0 transition-transform duration-700 ease-out opacity-40 blur-[100px]"
      style={{
        left: mousePos.x,
        top: mousePos.y,
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(99,102,241,0.1) 50%, transparent 70%)',
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
};

export default InteractiveOrb;
