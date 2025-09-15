
'use client';
import Link from "next/link";
import { useEffect, useState } from 'react';
import './not-found.css'; // we'll create this

export default function NotFound() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div className="nf-container">
      {/* spotlight */}
      <div
        className="nf-spotlight"
        style={{
          left: mouse.x - 150,
          top: mouse.y - 150,
        }}
      />
      
      {/* Content */}
      <div className="nf-content">
        <h1>404</h1>
        <p>Page not found</p>
      </div>

      {/* Tower */}
      <div className="nf-tower">
        <div className="flex flex-col items-center justify-center w-dvw h-dvh space-y-4">
            <h1 className="text-2xl font-semibold">Sorry. We Will Be Back Soon.</h1>
            <p className="text-gray-500">Please check back later.</p>
            <Link href="/" className="text-blue-500 font-extrabold text-3xl">Return <span className="text-white">Home</span></Link>
        </div>
        <div className="nf-tower-light" />
        <div className="nf-tower-icon">▲</div>
      </div>
    </div>
  );
}
