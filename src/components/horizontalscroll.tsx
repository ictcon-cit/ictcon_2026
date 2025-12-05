import React from "react";

const HorizontalScroll: React.FC = () => {
  const textContent = (
    <div className="flex items-center gap-6 text-xs sm:text-sm md:text-base">
      {/* Left label */}
      <span className="font-semibold text-yellow-900 flex items-center gap-2 whitespace-nowrap">
        <span className="text-lg sm:text-xl">🎉</span>
        Award Winners – ICTCon 2025
      </span>

      <span className="hidden sm:inline-block h-4 w-px bg-yellow-400" />

      {/* Best Paper */}
      <p className="text-gray-900 whitespace-nowrap">
        <span className="font-semibold">Best Paper:</span>
        &nbsp;Paper ID <strong>135</strong> — Advanced Fake News Detection Using
        Hybrid CNN-BiLSTM with Class Balancing.
      </p>

      <span className="hidden sm:inline-block h-4 w-px bg-yellow-400" />

      {/* Best Application Awards (139 & 28) */}
      <p className="text-gray-900 whitespace-nowrap">
        <span className="font-semibold">Best Application Awards:</span>
        &nbsp;Paper ID <strong>139</strong> — Classification &amp; Interpretability
        of Palm Leaf Diseases using Deep Learning and Explainable AI;
        &nbsp;Paper ID <strong>28</strong> — Hybrid Multi-View 3D Object Detection
        using 2D Images: Fusion of Structure-from-Motion and Learned Depth Priors.
      </p>
    </div>
  );

  return (
    <div className="horizontal-scroll-container w-full bg-yellow-50 text-black border-y border-yellow-200 shadow-sm overflow-hidden">
      <div className="scrolling-content flex gap-10">
        {[0, 1].map((i) => (
          <div
            key={i}
            className="scrolling-text flex-shrink-0 px-6 py-3 md:py-4 overflow-visible"
          >
            {textContent}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
