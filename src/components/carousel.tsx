"use client";
import { useState, useEffect } from "react";

interface CarouselImageData {
  stringValue: string;
  position?: string; // 👈 NEW
}

export default function HomeCara() {
  const [activeSlide, setActiveSlide] = useState(0);

  const defData: CarouselImageData[] = [
    { stringValue: "/images/carousel/new/Ictcon2025_3.jpeg", position: "center 65%" },
    { stringValue: "/images/carousel/new/Ictcon2025_2.jpeg", position: "center 50%" },
    { stringValue: "/images/carousel/nfsu_homepage.jpeg", position: "center 40%" },
    { stringValue: "/images/carousel/new/Ictcon2025_1.jpeg", position: "center" },
    { stringValue: "/images/carousel/new/home_1.jpeg", position: "center 30%" },
    { stringValue: "/images/carousel/new/home_2.jpeg", position: "center 25%" },
    { stringValue: "/images/carousel/new/homepage_nfsu.jpeg", position: "center 95%" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) =>
        prev === defData.length - 1 ? 0 : prev + 1
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [defData.length]);

  return (
    <div className="justify-center items-center flex flex-col">
      <div className="relative w-full">
        <div className="relative overflow-hidden h-[300px] md:h-[500px]">
          {defData.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === activeSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {/* ✅ Image with dynamic focal point */}
              <img
                src={image.stringValue}
                style={{ objectPosition: image.position || "center" }}
                className="w-full h-full object-cover"
                alt="carousel"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/40 text-center px-4">

                <div className="font-extrabold md:text-4xl sm:text-xl text-xs">
                  4th International Intelligent Computing and Technologies Conference
                </div>

                <div className="font-bold md:text-2xl sm:text-xl text-xs mt-2">
                  2-4 November, 2026
                </div>

                <div className="font-bold md:text-2xl sm:text-xl text-xs mt-4">
                  Jointly Organised by:
                </div>

                <div className="font-extrabold md:text-3xl sm:text-xl text-xs bg-sky-400/80 text-black px-3 py-1 rounded-md mt-2">
                  National Forensic Sciences University Goa Campus
                </div>

                <div className="font-extrabold md:text-3xl sm:text-xl text-xs bg-sky-400/80 text-black px-3 py-1 rounded-md mt-2">
                  Indian Institute of Technology (IIT) Goa
                </div>

                <div className="font-bold md:text-2xl sm:text-lg text-xs mt-2">
                  (ICTCon 2026)
                </div>

                <div className="font-bold md:text-3xl sm:text-xl text-xs mt-5 bg-sky-400/80 text-black px-3 py-1 rounded-md">
                  Hybrid Mode
                </div>

                {/* Logos */}
                <div className="flex flex-col items-center gap-4 mt-4 p-4 bg-white bg-opacity-20 rounded-xl shadow-md w-full">
                  <div className="flex flex-row items-center justify-evenly w-full flex-wrap gap-4">

                    <div className="flex flex-col items-center">
                      <img
                        src="/images/NFSU_LOGO.jpeg"
                        alt="NFSU Logo"
                        className="h-10 md:h-20 w-auto rounded-lg shadow mb-2 bg-white"
                      />
                    </div>

                    <div className="flex flex-col items-center">
                      <img
                        src="/images/iit_goa.jpg"
                        alt="IIT Goa Logo"
                        className="h-10 md:h-20 w-auto rounded-lg shadow mb-2 bg-white"
                      />
                    </div>

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