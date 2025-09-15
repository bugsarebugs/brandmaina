'use client';

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Spotlight() {
  const [mouseX, setMouseX] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true); // Component has mounted, now we can safely use client-only features
  }, []);

  useEffect(() => {
    if (!hasMounted) return; // Wait until mounted to add event listener

    const onMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX);
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [hasMounted]);

  // If not mounted yet, render content only without spotlight beam to match server
  if (!hasMounted) {
    return (
      <div className="spotlight-container relative flex flex-col items-center justify-center w-screen h-screen space-y-4 bg-black text-white">
        <div className="z-10 text-center px-4">
          <h1 className="text-2xl font-semibold">Sorry. We Will Be Back Soon.</h1>
          <p className="text-gray-400 mt-2">Please check back later.</p>
          <Link
            href="/"
            className="text-blue-500 font-extrabold text-3xl mt-4 inline-block relative z-20"
          >
            Return <span className="text-white">Home</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="spotlight-container relative flex flex-col items-center justify-center w-screen h-screen space-y-4 bg-black text-white">
      {/* Content */}
      <div className="z-10 text-center px-4">
        <h1 className="text-2xl font-semibold">Sorry. We Will Be Back Soon.</h1>
        <p className="text-gray-400 mt-2">Please check back later.</p>
        <Link
          href="/"
          className="text-blue-500 font-extrabold text-3xl mt-4 inline-block relative z-20"
        >
          Return <span className="text-white">Home</span>
        </Link>
      </div>

      {/* Spotlight beam */}
      <div
        className="spotlight-beam pointer-events-none absolute bottom-0"
        style={{
          left: mouseX,
          transform: `translateX(-50%)`,
          zIndex: 1,
        }}
      />
    </div>
  );
}
