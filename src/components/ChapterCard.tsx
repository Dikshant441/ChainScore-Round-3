import Image from "next/image";
import React, { FC, useState } from "react";
import { FaLock } from "react-icons/fa6";
import LazyLoad from "react-lazy-load";
import Tilt from "react-parallax-tilt";

interface ChapterCardProps {
  name: string;
  imageUrl: string;
  isLocked: boolean; // Indicate whether the chapter is locked
}

const ChapterCard: FC<ChapterCardProps> = ({ name, imageUrl, isLocked }) => {
  const [isShaking, setIsShaking] = useState(false);

  // Handle the click on a locked card to trigger the shake animation
  const handleClick = () => {
    if (isLocked) {
      setIsShaking(true);
      // Remove the shake effect after the animation duration
      setTimeout(() => setIsShaking(false), 1000);
    }
  };

  return (
    <div onClick={handleClick}>
      <Tilt>
        <li
          className={`m-2 relative bg-black rounded-md border-2 border-white ${
            isShaking ? "shake" : ""
          }`}
        >
          <div className="w-[300px] h-[450px] relative">
            <LazyLoad>
              <Image
                src={imageUrl}
                alt={name}
                fill
                priority
                sizes="100%"
                style={{ objectFit: "cover" }}
                className={`${isLocked ? "opacity-50" : "opacity-100"}`}
              />
            </LazyLoad>
            {isLocked && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 rounded-md">
                <span className="text-white text-xl">
                  <FaLock />
                </span>
              </div>
            )}
          </div>
          <hr className="w-64 ml-5 justify-between opacity-40" />
          <p className="p-2.5 rounded-b text-white text-center bg-black orbitron-custom">
            {isLocked ? "Coming Soon" : name}
          </p>
        </li>
      </Tilt>
    </div>
  );
};

export default ChapterCard;
