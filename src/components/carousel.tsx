"use client";
import { useState } from "react";

interface CarouselImageData {
  stringValue: string; // Update this to the actual data type
}

export default function HomeCara() {
  const [activeSlide, setActiveSlide] = useState(0);
  // auto change after 5 sec
  setTimeout(() => {
    if (activeSlide === defData.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  }, 5000);

  const defData: CarouselImageData[] = [
    {
      stringValue: "/images/carousel/citt1.jpg",
    },
    {
      stringValue: "/images/carousel/library21.jpg",
    },
    {
      stringValue: "/images/carousel/Bagurugba.jpg",
    },

    {
      stringValue: "/images/carousel/buildings1.jpg",
    },
    {
      stringValue: "/images/carousel/bihu.jpg",
    },
  ];

  return (
    <div className="justify-center items-center flex flex-col">
      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        <div className="relative overflow-hidden h-[200px] md:h-[400px]">
          {defData.map((image, index) => (
            <div
              key={index}
              className={`duration-700 ease-in-out ${
                index === activeSlide ? "" : "opacity-0"
              }`}
              data-carousel-item
            >
              <img
                src={image.stringValue}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:h-fit h-full  "
                alt="..."
              />
              <div className="absolute w-full h-full flex flex-col justify-center items-center text-white bg-black bg-opacity-40 drop-shadow-lg shadow-black text-center">
                <div className="font-extrabold md:text-4xl sm:text-xl text-xs">
                  3rd
                </div>
                <div className="font-extrabold md:text-4xl sm:text-xl text-xs ">
                  International Intelligent Computing and Technologies
                  Conference
                </div>
                <div className="font-bold md:text-2xl sm:text-lg text-xs">
                  {" "}
                  (ICTCon 2025){" "}
                </div>
                {/*
                <div className="font-bold md:text-3xl sm:text-xl text-xs sm:mt-5 animate-pulse">
                  {" "}
                 02-03 December, 2024
                </div>
                */}
                <div className="font-bold md:text-3xl sm:text-xl text-xs sm:mt-5 ">
                  Hybrid Mode
                </div>
                <div className="font-bold md:text-xl sm:text-base text-xs sm:mt-5 ">
                  {" "}
                  Jointly Organised by:
                </div>

                <div className="font-bold md:text-xl sm:text-base text-xs">
                  {" "}
                  Central Institute of Technology Kokrajhar, Assam, India
                  <br />&<br /> IIT Goa, India
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
