import React from 'react';
import Image from 'next/image';

interface BackgroundWrapperProps {
  src: string;
  alt: string;
  children: React.ReactNode;
  tintOpacity?: number;  // Optional prop for tint opacity
  brightness?: number;   // Optional prop for brightness level (default is 100)
}

const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({
  src,
  alt,
  children,
  tintOpacity = 0.5,
  brightness = 0.75,
}) => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image with brightness filter */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          quality={85} // Adjust quality for performance
          priority // Ensures the background image is preloaded
          className={`filter brightness-[${brightness}]`} // Dynamically set the brightness
        />
      </div>

      {/* Overlay with customizable opacity */}
      <div
        className="absolute inset-0 w-full h-full z-1"
        style={{ backgroundColor: 'black', opacity: tintOpacity }}
      ></div>

      {/* Content with proper z-index */}
      <div className="relative z-10 overflow-auto">{children}</div>
    </div>
  );
};

export default BackgroundWrapper;
