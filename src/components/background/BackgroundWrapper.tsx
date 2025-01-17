import React from "react";
import Image from "next/image";

interface BackgroundWrapperProps {
  src: string;
  alt: string;
  children: React.ReactNode;
  tintOpacity?: number; 
  brightness?: number; 
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
      <div className="absolute inset-0 w-full h-full z-0 ">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          quality={85}
          priority
          className={`filter brightness-[${brightness}]`}
        />
      </div>

      <div
        className="absolute inset-0 w-full h-full z-1"
        style={{ backgroundColor: "black", opacity: tintOpacity }}
      ></div>

      <div className="relative z-10 overflow-auto">{children}</div>
    </div>
  );
};

export default BackgroundWrapper;
