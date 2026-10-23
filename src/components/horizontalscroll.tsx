import React from "react";
import Link from "next/link";

const HorizontalScroll: React.FC = () => {
  const textContent = (
    <p className="text-sm md:text-lg whitespace-nowrap">
      <span className="ml-2 font-semibold text-blue-600">
        The proceedings of the conference will be published by Scopus Indexed ‐
        Springer in Communications in Computer and Information Science series
        (CCIS), ( Final Acceptance of Springer CCIS Proceedings).
      </span>
      <Link
        href="/schedule"
        className="ml-10 font-bold text-red-600 hover:text-red-800 hover:underline"
      >
        Full Program Schedule Updated
      </Link>
    </p>
  );

  return (
    <div className="horizontal-scroll-container mx-auto bg-gray-100 text-black flex items-center shadow-sm sm:rounded-lg px-4 overflow-hidden border border-gray-300 py-5 my-3">
      <div className="scrolling-content flex gap-10">
        {[...Array(2)].map((_, index) => (
          <div key={index} className="scrolling-text">
            {textContent}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
