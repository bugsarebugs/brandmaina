// components/ImageMagnifier.tsx

'use client';

import React, { useRef, useState } from 'react';

type ImageMagnifierProps = {
  src: string;
  width: number;
  height: number;
  zoom?: number;
};

const ImageMagnifier: React.FC<ImageMagnifierProps> = ({ src, width, height, zoom = 2 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [backgroundPosition, setBackgroundPosition] = useState('0% 0%');
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className='relative rounded-xs'
      style={{
        width,
        height,
        backgroundImage: `url(${src})`,
        backgroundSize: isHovering ? `${zoom * 100}%` : 'cover',
        backgroundPosition: isHovering ? backgroundPosition : 'center',
        backgroundRepeat: 'no-repeat',
        transition: 'background-size 0.3s ease',
        overflow: 'hidden',
        cursor: 'zoom-in',
      }}
    />
  );
};

export default ImageMagnifier;
