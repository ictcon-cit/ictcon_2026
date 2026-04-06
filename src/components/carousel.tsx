"use client";
import { useState, useEffect } from "react";

interface CarouselImageData {
  stringValue: string;
}

export default function HomeCara() {
  const [activeSlide, setActiveSlide] = useState(0);

  const defData: CarouselImageData[] = [
    { stringValue: "/images/carousel/new/Ictcon2025_3.jpeg" },
    { stringValue: "/images/carousel/new/Ictcon2025_2.jpeg" },
    { stringValue: "/images/carousel/nfsu_homepage.jpeg" },
    { stringValue: "/images/carousel/new/Ictcon2025_1.jpeg" },
    { stringValue: "/images/carousel/new/home_1.jpeg" },
    { stringValue: "/images/carousel/new/home_2.jpeg" },
  ];

  // ✅ Fixed auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) =>
        prev === defData.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [defData.length]);

  return (
    <div className="justify-center items-center flex flex-col">
      <div id="default-carousel" className="relative w-full">
        <div className="relative overflow-hidden h-[300px] md:h-[500px]">
          {defData.map((image, index) => (
            <div
              key={index}
              className={`duration-700 ease-in-out ${
                index === activeSlide ? "" : "opacity-0"
              }`}
            >
              <img
                src={image.stringValue}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:h-fit h-full"
                alt="carousel"
              />

              {/* Overlay */}
              <div className="absolute w-full h-full flex flex-col justify-center items-center text-white bg-black/35 text-center px-4">

                <div className="font-extrabold md:text-4xl sm:text-xl text-xs">
                  4th International Intelligent Computing and Technologies Conference
                </div>

                <div className="font-bold md:text-2xl sm:text-xl text-xs mt-2">
                  2-4 November, 2026
                </div>

                <div className="font-bold md:text-2xl sm:text-xl text-xs mt-4">
                  Jointly Organised by:
                </div>

                {/* ✅ SKY BLUE HIGHLIGHT */}
                <div className="font-extrabold md:text-3xl sm:text-xl text-xs bg-sky-400/80 text-black px-3 py-1 rounded-md mt-2">
                  National Forensic Sciences University Goa Campus
                </div>

                <div className="font-extrabold md:text-3xl sm:text-xl text-xs bg-sky-400/80 text-black px-3 py-1 rounded-md mt-2">
                  Indian Institute of Technology (IIT) Goa
                </div>

                <div className="font-bold md:text-2xl sm:text-lg text-xs mt-2">
                  (ICTCon 2026)
                </div>

                {/* ✅ Hybrid Mode Highlight */}
                <div className="font-bold md:text-3xl sm:text-xl text-xs mt-5 bg-sky-400/80 text-black px-3 py-1 rounded-md">
                  Hybrid Mode
                </div>

                {/* Logos Section */}
                <div className="flex flex-col items-center gap-4 mt-4 p-4 bg-white bg-opacity-20 rounded-xl shadow-md w-full">
                  <div className="flex flex-row items-center justify-evenly w-full flex-wrap gap-4">

                    {/* NFSU */}
                    <div className="flex flex-col items-center">
                      <img
                        src="/images/NFSU_LOGO.jpeg"
                        alt="NFSU Logo"
                        className="h-10 md:h-20 w-auto rounded-lg shadow mb-2 bg-white"
                      />
                    </div>

                    {/* IIT GOA */}
                    <div className="flex flex-col items-center">
                      <img
                        src="/images/iit_goa.jpg"
                        alt="IIT Goa Logo"
                        className="h-10 md:h-20 w-auto rounded-lg shadow mb-2 bg-white"
                      />
                    </div>

                    {/* CIT */}
                    <div className="flex flex-col items-center">
                      <img
                        src="/images/cit.png"
                        alt="CIT Kokrajhar Logo"
                        className="h-10 md:h-20 w-auto rounded-lg shadow mb-2 bg-white"
                      />
                    </div>

                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}