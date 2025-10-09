import Link from "next/link";
import React from "react";

export interface KeynoteDataType {
  name: string;
  designation?: string;
  organization?: string;
  image?: string;
  url: string;
}

interface KeynoteProps {
  data: KeynoteDataType[];
}

const Keynote: React.FC<KeynoteProps> = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-center gap-10 md:p-10 p-3 mt-10">
      {data.map((item, index) => (
        <Link
          href={item.url}
          key={index}
          className="rounded-xl shadow-lg bg-white text-black hover:shadow-2xl transition-all duration-300 w-64 md:w-72 h-[320px] flex flex-col items-center justify-start"
        >
          <div className="flex flex-col justify-center items-center md:p-5 p-3">
            {item.image ? (
              <img
                src={item.image}
                alt={item.name}
                className="rounded-full md:w-40 md:h-40 w-24 h-24 object-cover"
              />
            ) : (
              <div className="md:w-40 md:h-40 w-24 h-24 rounded-full bg-gray-300"></div>
            )}
          </div>

          <div className="p-3 flex flex-col justify-center items-center text-center flex-grow">
            <h1 className="md:text-lg text-sm font-bold leading-tight">{item.name}</h1>
            {item.designation && (
              <p className="text-xs md:text-sm mt-1">{item.designation}</p>
            )}
            {item.organization && (
              <p className="text-xs md:text-sm">{item.organization}</p>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Keynote;
