const images = [
  "/images/sponsors/IndianOil.png",
  "/images/sponsors/doma.png",
  "/images/sponsors/stihub.jpg",
  "/images/sponsors/ntpc.jpg",
  "/images/sponsors/hplogo.png",
];

export default function HorizontalScrollA() {
  return (
    <div className="overflow-hidden py-5 flex items-center">
      <div className="marquee">
        <div className="flex space-x-10">
          {images.map((src, index) => (
            <div
              key={index}
              className={`h-20 w-auto ${
                src.includes("hplogo")
                  ? "bg-white rounded-full"
                  : "bg-transparent"
              } flex items-center justify-center`}
            >
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
        <div className="flex space-x-10">
          {images.map((src, index) => (
            <div
              key={`duplicate-${index}`}
              className={`h-20 w-auto ${
                src.includes("hplogo")
                  ? "bg-white rounded-full"
                  : "bg-transparent"
              } flex items-center justify-center`}
            >
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
