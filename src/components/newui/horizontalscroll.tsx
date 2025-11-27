const images = [
  // "/images/sponsors/IndianOil.png",
  "/images/sponsors/doma.png",
  "/images/sponsors/stihub.jpg",
  "/images/sponsors/ARK.jpg",
  "/images/sponsors/BMG.jpg",
  "/images/sponsors/HP.jpg",
  "/images/sponsors/IndianOil.jpg",
  "/images/sponsors/nt.jpg",

  // "/images/sponsors/ntpc.jpg",
  // "/images/sponsors/hplogo.png",
];

export default function HorizontalScrollA() {
  return (
    <div className="overflow-hidden py-3 sm:py-5 flex items-center w-full">
      <div className="marquee">
        <div className="flex space-x-4 sm:space-x-6 lg:space-x-10">
          {images.map((src, index) => (
            <div
              key={index}
              className={`h-12 sm:h-16 lg:h-20 w-auto ${
                src.includes("hplogo")
                  ? "bg-white rounded-full"
                  : "bg-transparent"
              } flex items-center justify-center flex-shrink-0`}
            >
              <img
                src={src}
                alt={`Sponsor ${index + 1}`}
                className="h-full w-auto object-contain max-w-[120px] sm:max-w-[150px] lg:max-w-none"
              />
            </div>
          ))}
        </div>
        <div className="flex space-x-4 sm:space-x-6 lg:space-x-10">
          {images.map((src, index) => (
            <div
              key={`duplicate-${index}`}
              className={`h-12 sm:h-16 lg:h-20 w-auto ${
                src.includes("hplogo")
                  ? "bg-white rounded-full"
                  : "bg-transparent"
              } flex items-center justify-center flex-shrink-0`}
            >
              <img
                src={src}
                alt={`Sponsor ${index + 1}`}
                className="h-full w-auto object-contain max-w-[120px] sm:max-w-[150px] lg:max-w-none"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
