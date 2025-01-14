import React from 'react';
import Image from 'next/image';

interface BackgroundWrapperProps {
  src: string;
  alt: string;
  children: React.ReactNode;
}

const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({ src, alt, children }) => {
  return (
    <div className="relative w-full min-h-screen overflow-auto">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          quality={85} // Adjust quality for performance
          priority // Ensures the background image is preloaded
        />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundWrapper;
