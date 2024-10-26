"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import ChapterCard from "./ChapterCard";

// Define TypeScript interfaces for the data structure
interface Chapter {
  id: number;
  name: string;
  imageUrl: string;
  unlockXp: number;
}

interface Book {
  id: number;
  name: string;
  chapters: Chapter[];
}

const Body: FC = () => {
  const [list, setList] = useState<Book[]>([]);
  const [userXp, setUserXp] = useState<number>(0);
  const [activeBookIndex, setActiveBookIndex] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const bookRefs = useRef<(HTMLDivElement | null)[]>([]);

  const getBookData = async (): Promise<void> => {
    try {
      const response = await fetch(
        "https://mocki.io/v1/306e1e4d-22c0-4645-90cc-5cb048238f56"
      );
      const jsonData = await response.json();
      console.log(jsonData);
      setList(jsonData.books);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getUserXp = async (): Promise<void> => {
    try {
      const response = await fetch(
        "https://mocki.io/v1/711ee638-acc4-47aa-b0d1-c63fe3c2b85c"
      );
      const jsonData = await response.json();
      console.log(jsonData);
      setUserXp(jsonData.xp);
    } catch (error) {
      console.error("Error fetching user XP:", error);
    }
  };

  useEffect(() => {
    getBookData();
    getUserXp();

    const handleWheelScroll = (event: WheelEvent) => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft += event.deltaY;
        event.preventDefault();
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("wheel", handleWheelScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("wheel", handleWheelScroll);
      }
    };
  }, []);

  const handleScroll = () => {
    if (bookRefs.current.length === 0) return;

    let currentIndex = null;
    bookRefs.current.forEach((bookRef, index) => {
      if (bookRef) {
        const { left, right } = bookRef.getBoundingClientRect();
        const windowWidth = window.innerWidth;

        if (left < windowWidth / 2 && right > windowWidth / 2) {
          currentIndex = index;
        }
      }
    });

    if (currentIndex !== null && currentIndex !== activeBookIndex) {
      setActiveBookIndex(currentIndex);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  });

  const scrollToBook = (index: number) => {
    if (bookRefs.current[index]) {
      bookRefs.current[index]?.scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
      setActiveBookIndex(index);
    }
  };

  return (
    <div className="relative flex flex-col space-y-6">
      <div
        className="flex flex-row overflow-x-auto no-scrollbar space-x-6 mt-[18px]"
        ref={scrollContainerRef}
        data-testid="scroll-container" // Add this line
      >
        <div className="bg-black bg-opacity-85 h-36 w-auto text-white p-5 mt-36 ml-36 rounded-md">
          <p className="w-[240px] orbitron-custom">
            Recruit, it&apos;s your time to begin your advantage and earn some
            hands-on experience.
          </p>
          <p className="flex justify-end climate-crisis-custom ">-Prof</p>
        </div>
        <div className="flex">
          {list.map((book, index) => (
            <div
              key={book.id}
              ref={(el) => {
                bookRefs.current[index] = el;
              }}
            >
              <ul className="flex ml-8">
                {book.chapters.map((chapter) => (
                  <ChapterCard
                    key={chapter.id}
                    name={chapter.name}
                    imageUrl={chapter.imageUrl}
                    isLocked={userXp < chapter.unlockXp}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="flex justify-end text-white orbitron-custom">
          Scroll to Explore {">"}&gt;
        </p>
        <div className="flex justify-end mr-16 orbitron-custom">
          {list.map((book, index) => (
            <button
              key={book.id}
              onClick={() => scrollToBook(index)}
              className={`px-2 text-white rounded-md ${
                activeBookIndex === index ? "border-2 border-red-500" : ""
              }`}
            >
              {book.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
