import Link from "next/link";
import React from "react";

export interface KeynoteDataType {
  name: string;
  designation?: string;
  organization?: string;
  image?: string;
  url: string;
  type?: "keynote" | "industry";
}

interface KeynoteProps {
  data: KeynoteDataType[];
}

const Keynote: React.FC<KeynoteProps> = ({ data }) => {
  const keynoteSpeakers = data.filter((item) => item.type === "keynote");
  const industrySpeakers = data.filter((item) => item.type === "industry");

  return (
    <>
      {/* Keynote Speakers */}
      {keynoteSpeakers.length > 0 && (
        <>
          <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mt-10">
            Keynote Speakers
          </h2>

          <div className="flex flex-wrap justify-center gap-10 md:p-10 p-3 mt-6">
            {keynoteSpeakers.map((item, index) => (
              <Link
                href={item.url}
                key={index}
                className="rounded-xl shadow-lg bg-white text-black hover:shadow-2xl transition-all duration-300 w-64 md:w-72 h-[320px] flex flex-col items-center"
              >
                <div className="flex justify-center items-center p-5">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rounded-full md:w-36 md:h-36 w-24 h-24 object-cover"
                    />
                  ) : (
                    <div className="md:w-36 md:h-36 w-24 h-24 rounded-full bg-gray-300"></div>
                  )}
                </div>

                <div className="px-4 text-center">
                  <h1 className="md:text-lg text-sm font-bold">{item.name}</h1>
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
        </>
      )}

      {/* Industry Speakers */}
      {industrySpeakers.length > 0 && (
        <>
          <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mt-4">
            Industry Speakers
          </h2>

          <div className="flex flex-wrap justify-center gap-10 md:p-10 p-3 mt-6">
            {industrySpeakers.map((item, index) => (
              <Link
                href={item.url}
                key={index}
                className="rounded-xl shadow-lg bg-white text-black hover:shadow-2xl transition-all duration-300 w-64 md:w-72 h-[320px] flex flex-col items-center"
              >
                <div className="flex justify-center items-center p-5">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rounded-full md:w-36 md:h-36 w-24 h-24 object-cover"
                    />
                  ) : (
                    <div className="md:w-36 md:h-36 w-24 h-24 rounded-full bg-gray-300"></div>
                  )}
                </div>

                <div className="px-4 text-center">
                  <h1 className="md:text-lg text-sm font-bold">{item.name}</h1>
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
        </>
      )}
    </>
  );
};

export default Keynote;