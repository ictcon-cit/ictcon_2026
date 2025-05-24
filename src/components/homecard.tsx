import React, { useRef, useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import AboutSection from "./homeaboutcard";

export interface CardProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

const Card: React.FC<CardProps> = ({ title, description, image, url }) => {
  const descriptionRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

  useEffect(() => {
    const element = descriptionRef.current;
    if (element) {
      const isOverflow = element.scrollHeight > element.clientHeight;
      setIsOverflowing(isOverflow);
      const handleScroll = () => {
        const isScrolled =
          element.scrollTop + element.clientHeight >= element.scrollHeight - 1;
        setIsScrolledToBottom(isScrolled);
      };
      handleScroll(); // Check scroll position initially
      element.addEventListener("scroll", handleScroll);
      return () => {
        element.removeEventListener("scroll", handleScroll);
      };
    }
  }, [description]);

  const scrollToTop = () => {
    const element = descriptionRef.current;
    if (element) {
      element.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const scrollToBottom = () => {
    const element = descriptionRef.current;
    if (element) {
      element.scrollTo({ top: element.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <div className="rounded-lg shadow-lg bg-white relative">
      <div className="flex flex-col justify-center items-center pb-5">
        <img src={image} alt={title} className="rounded-t-lg" />
        <div className="p-5 flex flex-col justify-center items-center text-justify">
          <h1 className="text-xl font-bold">{title}</h1>
          <div
            ref={descriptionRef}
            className="sm:max-h-60 overflow-y-auto hide-scrollbar relative"
          >
            <p className="text-md">{description}</p>
          </div>
        </div>
      </div>
      {isOverflowing && (
        <div className="absolute bottom-1 left-0 right-0 sm:flex justify-center items-center bg-gradient-to-t from-white to-transparent h-8 animate-bounce hidden">
          {isScrolledToBottom ? (
            <FaArrowUp className="text-gray-500" onClick={scrollToTop} />
          ) : (
            <FaArrowDown className="text-gray-500" onClick={scrollToBottom} />
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
