import React from "react";


const HorizontalScroll: React.FC = () => {
  const textContent = (
    <p className="text-blue-500 text-sm md:text-lg whitespace-nowrap overflow-hidden text-ellipsis">
      The proceedings of the conference will be published by Scopus Indexed ‐
      Springer in{" "}
      <a
        href="https://www.springer.com/series/7899"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline hover:text-blue-800 font-bold"
      >
        Communications in Computer and Information Science series (CCIS), (Final
        acceptance of springer proceedings)
      </a>
      .{" "}
      <span className="font-bold text-red-500">
        [
        <a
          href="./ICTCon2024_IDXXX.pptx"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-red-800"
        >
          Oral power point presentation template available
        </a>
        ]
      </span>
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
