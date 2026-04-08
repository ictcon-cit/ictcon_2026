import Link from "next/link";
const images = [
  // "/images/sponsors/IndianOil.png",
  "/images/sponsors/doma.png",
  "/images/sponsors/stihub.jpg",
  "/images/sponsors/ARK.jpg",
  "/images/sponsors/BMG.jpg",
  "/images/sponsors/HP.jpg",
  "/images/sponsors/IndianOil.jpg",
  "/images/sponsors/nt.jpg",
  "/images/sponsors/IndianOil_Bonagaigaon.jpg",

  // "/images/sponsors/ntpc.jpg",
  // "/images/sponsors/hplogo.png",
];

export default function HorizontalScrollA() {
  return (
    <div className="overflow-hidden py-6 sm:py-10 flex items-center justify-center w-full">
      
      {/* ===== Existing Sponsor Marquee (Commented Out) ===== */}
      {/*
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
      */}

      {/* ===== New Sponsorship Message ===== */}
      <div className="text-center max-w-2xl px-4">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-600 mb-3">
          Interested in Sponsoring?
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
          We welcome sponsorships from organizations and companies interested in
          supporting the <span className="font-semibold">
          Intelligent Computing and Technologies Conference 2026
          </span>.
        </p>
        <br />
          {/* ✅ CTA Button */}
        <Link
          href="/sponsorship"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300"
        >
          Call for Sponsorship
        </Link>
      </div>

    </div>
  );
}