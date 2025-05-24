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
    <div className="grid md:grid-cols-4 grid-cols-2 md:gap-16 gap-2 md:p-10 p-3">
      {data.map((item, index) => (
        <Link
          href={item.url}
          className="rounded-lg shadow-lg bg-white text-black"
          key={index}
        >
          <div className="flex flex-col justify-center items-center md:p-5 p-1">
            {item.image != null ? (
              <img src={item.image} alt={item.name} className="rounded-full md:w-40 md:h-40 w-20 h-20" />
            ) : (
              <div className="md:w-40 md:h-40 w-20 h-20 rounded-full bg-gray-300"></div>
            )}

            <div className="p-5 flex flex-col justify-center items-center text-center ">
              <h1 className="md:text-xl text-xs font-bold">{item.name}</h1>
              {item.designation && (
                <p className="md:text-md text-xs ">{item.designation}</p>
              )}
              {item.organization && (
                <p className="md:text-md text-xs">{item.organization}</p>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Keynote;
