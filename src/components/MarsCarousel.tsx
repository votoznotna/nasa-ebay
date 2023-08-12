"use client";

import React, { useEffect } from "react";
import { MarsPhoto } from "@/types";
import Image from "next/image";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

interface IMarsCarouselProps {
  images: Array<MarsPhoto>;
}

const MarsCarousel: React.FC<IMarsCarouselProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = React.useState(0);
  const [refs, setRefs] = React.useState<Array<React.RefObject<any>>>([]);
  useEffect(() => {
    setRefs(
      images.reduce((acc: any, val, i) => {
        acc[i] = React.createRef();
        return acc;
      }, {})
    );
  }, []);

  const scrollToImage = (ind: number) => {
    setCurrentImage(ind);
    refs[ind].current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const totalImages = images.length;

  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  };

  const arrowStyle =
    "absolute text-white  cursor-pointer text-2xl z-10  h-10 w-10 rounded-full opacity-75 flex items-center justify-center";

  const sliderHandler = (isLeft: boolean) => (
    <button
      type="button"
      onClick={isLeft ? previousImage : nextImage}
      className={`${arrowStyle} ${isLeft ? "-left-8" : "-right-8"}`}
      style={{ top: "50%" }}
    >
      <span role="img" aria-label={`Arrow ${isLeft ? "left" : "right"}`}>
        {isLeft ? (
          <BsChevronCompactLeft className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-700" />
        ) : (
          <BsChevronCompactRight className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-700" />
        )}
      </span>
    </button>
  );

  return (
    <div className="max-w-6xl mx-auto flex items-center mt-8">
      <div className="relative w-full">
        <h2 className="text-xl font-medium text-black-600">
          Curiosity rover images{" "}
          <span className="mars-prime-color">from today</span>
        </h2>
        <div className="flex items-center">
          {sliderHandler(true)}
          <div className="w-full mars-carousel mt-4">
            {images.map((img: MarsPhoto, i: number) => (
              <Image
                key={img.id}
                ref={refs[i]}
                className="animate-fadeIn rounded-lg group-hover:opacity-80 transition-opacity duration-200 mx-1"
                src={img.img_src}
                width={150}
                height={150}
                style={{
                  width: "150px",
                  height: "150px",
                }}
                placeholder="blur"
                blurDataURL="/spinner.svg"
                alt={`${img.camera?.full_name}`}
              />
            ))}
          </div>
          {sliderHandler(false)}
        </div>
      </div>
    </div>
  );
};

export default MarsCarousel;
