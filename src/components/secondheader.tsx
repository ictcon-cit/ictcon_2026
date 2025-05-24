import React from "react";

export interface SecondHeaderProps {
  title: string;
}

const SecondHeader: React.FC<SecondHeaderProps> = ({ title }) => {
  return (
    <div
      className="relative md:h-44 h-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/carousel/citt1.jpg')" }}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-45">
        <span className="md:text-4xl text-xl text-white font-semibold">
          {title}
        </span>
      </div>
    </div>
  );
};

export default SecondHeader;
