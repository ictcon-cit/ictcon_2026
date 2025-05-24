import React, { useState, useEffect } from "react";
import { KeyNoteData } from "@/utils/keynote";

const SpeakerCarousel: React.FC = () => {
  const [currentSpeakerIndex, setCurrentSpeakerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpeakerIndex(
        (prevIndex) => (prevIndex + 1) % KeyNoteData.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getCurrentSpeaker = () => {
    return KeyNoteData[currentSpeakerIndex];
  };

  const speaker = getCurrentSpeaker();

  return (
    <div className="flex justify-center items-center py-6 h-full w-full p-5">
      <div className="bg-black overflow-hidden relative border border-gray-200 h-full w-full rounded-md">
        <div className="relative">
          <img
            src={speaker.image}
            alt={speaker.name}
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
        </div>
        <div className="p-6 text-center absolute bottom-0 w-full bg-opacity-75 bg-black text-white">
          <h2 className="text-2xl font-bold">{speaker.name}</h2>
          <p className="text-lg">{speaker.organization}</p>
        </div>
        <div
          className="absolute top-0 right-0 m-4 text-white px-2 py-1 rounded text-sm"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          {currentSpeakerIndex + 1} / {KeyNoteData.length}
        </div>
      </div>
    </div>
  );
};

export default SpeakerCarousel;
